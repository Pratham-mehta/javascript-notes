// Advanced Text-to-Speech for mdBook
// Works offline using Web Speech API

class mdBookTTS {
    constructor() {
        this.synth = window.speechSynthesis;
        this.currentUtterance = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.voices = [];
        this.settings = {
            rate: 1.0,
            pitch: 1.0,
            volume: 1.0,
            voice: null
        };
        
        this.init();
    }

    init() {
        // Wait for voices to load
        if (this.synth.getVoices().length === 0) {
            this.synth.addEventListener('voiceschanged', () => {
                this.voices = this.synth.getVoices();
                this.createTTSInterface();
            });
        } else {
            this.voices = this.synth.getVoices();
            this.createTTSInterface();
        }
    }

    createTTSInterface() {
        const content = document.querySelector('.content main') || document.querySelector('.content');
        if (!content) return;

        // Create TTS container
        const ttsContainer = document.createElement('div');
        ttsContainer.className = 'tts-container';
        ttsContainer.innerHTML = `
            <div class="tts-controls">
                <button class="tts-btn tts-play" title="Read Aloud">
                    <span class="play-icon">🔊</span>
                    <span class="pause-icon" style="display: none;">⏸️</span>
                    <span class="stop-icon" style="display: none;">⏹️</span>
                </button>
                <button class="tts-settings-btn" title="Voice Settings">⚙️</button>
                <div class="tts-progress">
                    <div class="tts-progress-bar"></div>
                </div>
            </div>
            <div class="tts-settings" style="display: none;">
                <div class="tts-setting">
                    <label>Voice:</label>
                    <select class="tts-voice-select"></select>
                </div>
                <div class="tts-setting">
                    <label>Speed:</label>
                    <input type="range" class="tts-rate" min="0.1" max="2" step="0.1" value="1">
                    <span class="tts-rate-value">1.0x</span>
                </div>
                <div class="tts-setting">
                    <label>Pitch:</label>
                    <input type="range" class="tts-pitch" min="0" max="2" step="0.1" value="1">
                    <span class="tts-pitch-value">1.0</span>
                </div>
                <div class="tts-setting">
                    <label>Volume:</label>
                    <input type="range" class="tts-volume" min="0" max="1" step="0.1" value="1">
                    <span class="tts-volume-value">100%</span>
                </div>
            </div>
        `;

        // Add CSS styles
        const style = document.createElement('style');
        style.textContent = `
            .tts-container {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                padding: 12px;
                margin: 16px 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .tts-controls {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .tts-btn, .tts-settings-btn {
                background: #007bff;
                color: white;
                border: none;
                border-radius: 6px;
                padding: 8px 16px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.2s;
            }
            
            .tts-btn:hover, .tts-settings-btn:hover {
                background: #0056b3;
            }
            
            .tts-btn:disabled {
                background: #6c757d;
                cursor: not-allowed;
            }
            
            .tts-progress {
                flex: 1;
                height: 4px;
                background: #e9ecef;
                border-radius: 2px;
                overflow: hidden;
            }
            
            .tts-progress-bar {
                height: 100%;
                background: #28a745;
                width: 0%;
                transition: width 0.1s linear;
            }
            
            .tts-settings {
                margin-top: 12px;
                padding-top: 12px;
                border-top: 1px solid #e9ecef;
                display: grid;
                gap: 8px;
            }
            
            .tts-setting {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .tts-setting label {
                min-width: 60px;
                font-size: 14px;
                font-weight: 500;
            }
            
            .tts-voice-select {
                flex: 1;
                padding: 4px 8px;
                border: 1px solid #ced4da;
                border-radius: 4px;
            }
            
            .tts-setting input[type="range"] {
                flex: 1;
            }
            
            .tts-rate-value, .tts-pitch-value, .tts-volume-value {
                min-width: 50px;
                font-size: 12px;
                color: #6c757d;
            }

            @media (prefers-color-scheme: dark) {
                .tts-container {
                    background: #2d3748;
                    border-color: #4a5568;
                    color: #e2e8f0;
                }
                
                .tts-progress {
                    background: #4a5568;
                }
                
                .tts-voice-select {
                    background: #2d3748;
                    color: #e2e8f0;
                    border-color: #4a5568;
                }
                
                .tts-settings {
                    border-color: #4a5568;
                }
            }
        `;
        document.head.appendChild(style);

        // Insert at the beginning of content
        content.insertBefore(ttsContainer, content.firstChild);

        this.setupEventListeners(ttsContainer);
        this.populateVoiceSelect();
    }

    setupEventListeners(container) {
        const playBtn = container.querySelector('.tts-play');
        const settingsBtn = container.querySelector('.tts-settings-btn');
        const settingsPanel = container.querySelector('.tts-settings');
        const voiceSelect = container.querySelector('.tts-voice-select');
        const rateSlider = container.querySelector('.tts-rate');
        const pitchSlider = container.querySelector('.tts-pitch');
        const volumeSlider = container.querySelector('.tts-volume');

        // Play/Pause/Stop button
        playBtn.addEventListener('click', () => {
            if (!this.isPlaying) {
                this.startReading();
            } else if (this.isPaused) {
                this.resumeReading();
            } else {
                this.pauseReading();
            }
        });

        // Settings toggle
        settingsBtn.addEventListener('click', () => {
            settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
        });

        // Voice selection
        voiceSelect.addEventListener('change', (e) => {
            this.settings.voice = this.voices[e.target.value];
        });

        // Rate control
        rateSlider.addEventListener('input', (e) => {
            this.settings.rate = parseFloat(e.target.value);
            container.querySelector('.tts-rate-value').textContent = `${this.settings.rate}x`;
        });

        // Pitch control
        pitchSlider.addEventListener('input', (e) => {
            this.settings.pitch = parseFloat(e.target.value);
            container.querySelector('.tts-pitch-value').textContent = this.settings.pitch.toFixed(1);
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            this.settings.volume = parseFloat(e.target.value);
            container.querySelector('.tts-volume-value').textContent = `${Math.round(this.settings.volume * 100)}%`;
        });
    }

    populateVoiceSelect() {
        const voiceSelect = document.querySelector('.tts-voice-select');
        if (!voiceSelect) return;

        voiceSelect.innerHTML = '';
        this.voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice.default) {
                option.selected = true;
                this.settings.voice = voice;
            }
            voiceSelect.appendChild(option);
        });
    }

    getTextContent() {
        const content = document.querySelector('.content main') || document.querySelector('.content');
        if (!content) return '';

        // Clone the content and remove TTS interface
        const clone = content.cloneNode(true);
        const ttsContainer = clone.querySelector('.tts-container');
        if (ttsContainer) {
            ttsContainer.remove();
        }

        // Get clean text content
        return clone.innerText.trim();
    }

    startReading() {
        const text = this.getTextContent();
        if (!text) return;

        // Stop any current speech
        this.synth.cancel();

        // Create new utterance
        this.currentUtterance = new SpeechSynthesisUtterance(text);
        this.currentUtterance.rate = this.settings.rate;
        this.currentUtterance.pitch = this.settings.pitch;
        this.currentUtterance.volume = this.settings.volume;
        if (this.settings.voice) {
            this.currentUtterance.voice = this.settings.voice;
        }

        // Set up progress tracking
        const words = text.split(/\s+/);
        let wordIndex = 0;
        const progressBar = document.querySelector('.tts-progress-bar');

        this.currentUtterance.onboundary = (event) => {
            if (event.name === 'word') {
                wordIndex++;
                const progress = (wordIndex / words.length) * 100;
                if (progressBar) {
                    progressBar.style.width = `${progress}%`;
                }
            }
        };

        // Event listeners
        this.currentUtterance.onstart = () => {
            this.isPlaying = true;
            this.isPaused = false;
            this.updateButtonState();
        };

        this.currentUtterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateButtonState();
            if (progressBar) {
                progressBar.style.width = '0%';
            }
        };

        this.currentUtterance.onerror = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateButtonState();
        };

        // Start speaking
        this.synth.speak(this.currentUtterance);
    }

    pauseReading() {
        if (this.isPlaying && !this.isPaused) {
            this.synth.pause();
            this.isPaused = true;
            this.updateButtonState();
        }
    }

    resumeReading() {
        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
            this.updateButtonState();
        }
    }

    stopReading() {
        this.synth.cancel();
        this.isPlaying = false;
        this.isPaused = false;
        this.updateButtonState();
        const progressBar = document.querySelector('.tts-progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    updateButtonState() {
        const playIcon = document.querySelector('.play-icon');
        const pauseIcon = document.querySelector('.pause-icon');
        const stopIcon = document.querySelector('.stop-icon');
        const playBtn = document.querySelector('.tts-play');

        if (!playIcon || !pauseIcon || !stopIcon || !playBtn) return;

        if (!this.isPlaying) {
            // Show play button
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            stopIcon.style.display = 'none';
            playBtn.title = 'Read Aloud';
        } else if (this.isPaused) {
            // Show resume button
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            stopIcon.style.display = 'none';
            playBtn.title = 'Resume Reading';
        } else {
            // Show pause button
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
            stopIcon.style.display = 'none';
            playBtn.title = 'Pause Reading';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if Web Speech API is supported
    if ('speechSynthesis' in window) {
        new mdBookTTS();
    } else {
        console.warn('Text-to-Speech not supported in this browser');
    }
});

// Handle page navigation in single-page apps
window.addEventListener('hashchange', function() {
    // Small delay to let content load
    setTimeout(() => {
        if (window.tts) {
            window.tts.stopReading();
        }
        new mdBookTTS();
    }, 100);
});
