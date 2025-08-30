// Premium Text-to-Speech for mdBook
// Beautiful UI with working settings and smart voice selection

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
            volume: 0.8,
            voice: null
        };
        
        this.init();
    }

    init() {
        // Load voices with retry mechanism
        this.loadVoices();
        
        // Voices might load asynchronously
        this.synth.addEventListener('voiceschanged', () => {
            this.loadVoices();
        });

        // Create interface after a short delay to ensure voices are loaded
        setTimeout(() => {
            this.createTTSInterface();
        }, 100);
    }

    loadVoices() {
        this.voices = this.synth.getVoices();
        
        if (this.voices.length > 0) {
            // Smart voice selection: prefer English, natural-sounding voices
            const preferredVoice = this.voices.find(voice => 
                voice.lang.startsWith('en') && 
                (voice.name.includes('Natural') || 
                 voice.name.includes('Premium') || 
                 voice.name.includes('Enhanced') ||
                 voice.name.includes('Google') ||
                 voice.name.includes('Microsoft'))
            ) || this.voices.find(voice => voice.lang.startsWith('en')) || this.voices[0];
            
            this.settings.voice = preferredVoice;
        }
    }

    createTTSInterface() {
        const content = document.querySelector('.content main') || document.querySelector('.content');
        if (!content) return;

        // Remove existing TTS interface
        const existing = document.querySelector('.tts-container');
        if (existing) existing.remove();

        // Create floating TTS button
        const ttsContainer = document.createElement('div');
        ttsContainer.className = 'tts-container';
        ttsContainer.innerHTML = `
            <div class="tts-floating-btn" id="tts-main-btn">
                <svg class="tts-icon play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
                <svg class="tts-icon pause-icon" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                <div class="tts-pulse-ring"></div>
            </div>
            
            <div class="tts-panel" id="tts-panel" style="display: none;">
                <div class="tts-panel-header">
                    <h3>🎧 Listen to this page</h3>
                    <button class="tts-close-btn">&times;</button>
                </div>
                
                <div class="tts-controls-section">
                    <div class="tts-main-controls">
                        <button class="tts-control-btn" id="tts-play-btn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <span>Play</span>
                        </button>
                        <button class="tts-control-btn" id="tts-stop-btn" disabled>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 6h12v12H6z"/>
                            </svg>
                            <span>Stop</span>
                        </button>
                    </div>
                    
                    <div class="tts-progress-section">
                        <div class="tts-progress-track">
                            <div class="tts-progress-bar"></div>
                        </div>
                        <div class="tts-time-display">
                            <span class="tts-current-time">0:00</span>
                            <span class="tts-total-time">--:--</span>
                        </div>
                    </div>
                </div>

                <div class="tts-settings-section">
                    <div class="tts-setting-group">
                        <label class="tts-label">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                            </svg>
                            Voice
                        </label>
                        <select class="tts-select" id="tts-voice-select">
                            <option>Loading voices...</option>
                        </select>
                    </div>

                    <div class="tts-setting-group">
                        <label class="tts-label">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM5 16h14v2H5z"/>
                            </svg>
                            Speed: <span id="tts-rate-display">1.0x</span>
                        </label>
                        <input type="range" class="tts-slider" id="tts-rate" min="0.25" max="2" step="0.25" value="1">
                        <div class="tts-slider-labels">
                            <span>Slow</span>
                            <span>Fast</span>
                        </div>
                    </div>

                    <div class="tts-setting-group">
                        <label class="tts-label">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                            Volume: <span id="tts-volume-display">80%</span>
                        </label>
                        <input type="range" class="tts-slider" id="tts-volume" min="0" max="1" step="0.1" value="0.8">
                        <div class="tts-slider-labels">
                            <span>Quiet</span>
                            <span>Loud</span>
                        </div>
                    </div>

                    <div class="tts-setting-group">
                        <label class="tts-label">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Pitch: <span id="tts-pitch-display">1.0</span>
                        </label>
                        <input type="range" class="tts-slider" id="tts-pitch" min="0.5" max="1.5" step="0.1" value="1">
                        <div class="tts-slider-labels">
                            <span>Low</span>
                            <span>High</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add premium CSS styles
        const style = document.createElement('style');
        style.textContent = `
            .tts-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            }

            .tts-floating-btn {
                position: relative;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden;
            }

            .tts-floating-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
            }

            .tts-floating-btn.playing {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                animation: pulse 2s infinite;
            }

            .tts-pulse-ring {
                position: absolute;
                width: 56px;
                height: 56px;
                border: 3px solid rgba(102, 126, 234, 0.3);
                border-radius: 50%;
                animation: pulse-ring 1.5s infinite;
                opacity: 0;
            }

            .tts-floating-btn.playing .tts-pulse-ring {
                opacity: 1;
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            @keyframes pulse-ring {
                0% { transform: scale(1); opacity: 0.7; }
                100% { transform: scale(1.8); opacity: 0; }
            }

            .tts-icon {
                width: 24px;
                height: 24px;
                color: white;
                transition: opacity 0.2s;
            }

            .tts-panel {
                position: absolute;
                top: 70px;
                right: 0;
                width: 320px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                overflow: hidden;
                transform: translateY(-10px) scale(0.95);
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(0, 0, 0, 0.05);
            }

            .tts-panel.show {
                transform: translateY(0) scale(1);
                opacity: 1;
            }

            .tts-panel-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 16px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .tts-panel-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
            }

            .tts-close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }

            .tts-close-btn:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }

            .tts-controls-section {
                padding: 20px;
                border-bottom: 1px solid #f0f0f0;
            }

            .tts-main-controls {
                display: flex;
                gap: 12px;
                margin-bottom: 16px;
            }

            .tts-control-btn {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 12px;
                border: none;
                border-radius: 10px;
                background: #f8f9fa;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s;
                font-size: 14px;
            }

            .tts-control-btn:hover:not(:disabled) {
                background: #e9ecef;
                transform: translateY(-1px);
            }

            .tts-control-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none;
            }

            .tts-control-btn.active {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }

            .tts-control-btn svg {
                width: 18px;
                height: 18px;
            }

            .tts-progress-section {
                margin-bottom: 8px;
            }

            .tts-progress-track {
                height: 6px;
                background: #f0f0f0;
                border-radius: 3px;
                overflow: hidden;
                margin-bottom: 8px;
            }

            .tts-progress-bar {
                height: 100%;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                width: 0%;
                transition: width 0.1s ease;
                border-radius: 3px;
            }

            .tts-time-display {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #666;
                font-weight: 500;
            }

            .tts-settings-section {
                padding: 20px;
            }

            .tts-setting-group {
                margin-bottom: 20px;
            }

            .tts-setting-group:last-child {
                margin-bottom: 0;
            }

            .tts-label {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
                font-size: 14px;
                color: #333;
                margin-bottom: 12px;
            }

            .tts-label svg {
                width: 16px;
                height: 16px;
                color: #667eea;
            }

            .tts-select {
                width: 100%;
                padding: 10px 12px;
                border: 2px solid #f0f0f0;
                border-radius: 8px;
                background: white;
                font-size: 14px;
                cursor: pointer;
                transition: border-color 0.2s;
            }

            .tts-select:focus {
                outline: none;
                border-color: #667eea;
            }

            .tts-slider {
                width: 100%;
                height: 6px;
                border-radius: 3px;
                background: #f0f0f0;
                outline: none;
                cursor: pointer;
                margin-bottom: 8px;
            }

            .tts-slider::-webkit-slider-thumb {
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                cursor: pointer;
                box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
                transition: transform 0.2s;
            }

            .tts-slider::-webkit-slider-thumb:hover {
                transform: scale(1.1);
            }

            .tts-slider::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                cursor: pointer;
                border: none;
                box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
            }

            .tts-slider-labels {
                display: flex;
                justify-content: space-between;
                font-size: 11px;
                color: #999;
                font-weight: 500;
            }

            @media (prefers-color-scheme: dark) {
                .tts-panel {
                    background: #2d3748;
                    border-color: #4a5568;
                }

                .tts-controls-section {
                    border-color: #4a5568;
                }

                .tts-settings-section {
                    background: #2d3748;
                }

                .tts-control-btn {
                    background: #4a5568;
                    color: #e2e8f0;
                }

                .tts-control-btn:hover:not(:disabled) {
                    background: #5a6578;
                }

                .tts-select {
                    background: #4a5568;
                    color: #e2e8f0;
                    border-color: #5a6578;
                }

                .tts-label {
                    color: #e2e8f0;
                }

                .tts-progress-track {
                    background: #4a5568;
                }

                .tts-time-display {
                    color: #a0aec0;
                }

                .tts-slider {
                    background: #4a5568;
                }
            }

            @media (max-width: 480px) {
                .tts-container {
                    top: 10px;
                    right: 10px;
                }

                .tts-panel {
                    width: calc(100vw - 40px);
                    right: -10px;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(ttsContainer);

        this.setupEventListeners();
        this.populateVoiceSelect();
    }

    setupEventListeners() {
        const floatingBtn = document.getElementById('tts-main-btn');
        const panel = document.getElementById('tts-panel');
        const closeBtn = document.querySelector('.tts-close-btn');
        const playBtn = document.getElementById('tts-play-btn');
        const stopBtn = document.getElementById('tts-stop-btn');
        const voiceSelect = document.getElementById('tts-voice-select');
        const rateSlider = document.getElementById('tts-rate');
        const volumeSlider = document.getElementById('tts-volume');
        const pitchSlider = document.getElementById('tts-pitch');

        // Floating button click
        floatingBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.isPlaying) {
                this.togglePlayPause();
            } else {
                this.togglePanel();
            }
        });

        // Close panel
        closeBtn.addEventListener('click', () => {
            this.hidePanel();
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && !floatingBtn.contains(e.target)) {
                this.hidePanel();
            }
        });

        // Play/Stop buttons
        playBtn.addEventListener('click', () => {
            if (!this.isPlaying) {
                this.startReading();
            } else {
                this.togglePlayPause();
            }
        });

        stopBtn.addEventListener('click', () => {
            this.stopReading();
        });

        // Settings controls
        voiceSelect.addEventListener('change', (e) => {
            const selectedIndex = parseInt(e.target.value);
            this.settings.voice = this.voices[selectedIndex];
        });

        rateSlider.addEventListener('input', (e) => {
            this.settings.rate = parseFloat(e.target.value);
            document.getElementById('tts-rate-display').textContent = `${this.settings.rate}x`;
        });

        volumeSlider.addEventListener('input', (e) => {
            this.settings.volume = parseFloat(e.target.value);
            document.getElementById('tts-volume-display').textContent = `${Math.round(this.settings.volume * 100)}%`;
        });

        pitchSlider.addEventListener('input', (e) => {
            this.settings.pitch = parseFloat(e.target.value);
            document.getElementById('tts-pitch-display').textContent = this.settings.pitch.toFixed(1);
        });
    }

    populateVoiceSelect() {
        const voiceSelect = document.getElementById('tts-voice-select');
        if (!voiceSelect || this.voices.length === 0) {
            setTimeout(() => this.populateVoiceSelect(), 100);
            return;
        }

        voiceSelect.innerHTML = '';
        
        // Group voices by language
        const englishVoices = this.voices.filter(v => v.lang.startsWith('en'));
        const otherVoices = this.voices.filter(v => !v.lang.startsWith('en'));

        if (englishVoices.length > 0) {
            const englishGroup = document.createElement('optgroup');
            englishGroup.label = 'English Voices';
            englishVoices.forEach((voice, index) => {
                const option = document.createElement('option');
                option.value = this.voices.indexOf(voice);
                option.textContent = voice.name;
                if (voice === this.settings.voice) {
                    option.selected = true;
                }
                englishGroup.appendChild(option);
            });
            voiceSelect.appendChild(englishGroup);
        }

        if (otherVoices.length > 0) {
            const otherGroup = document.createElement('optgroup');
            otherGroup.label = 'Other Languages';
            otherVoices.forEach((voice, index) => {
                const option = document.createElement('option');
                option.value = this.voices.indexOf(voice);
                option.textContent = `${voice.name} (${voice.lang})`;
                if (voice === this.settings.voice) {
                    option.selected = true;
                }
                otherGroup.appendChild(option);
            });
            voiceSelect.appendChild(otherGroup);
        }
    }

    togglePanel() {
        const panel = document.getElementById('tts-panel');
        const isVisible = panel.classList.contains('show');
        
        if (isVisible) {
            this.hidePanel();
        } else {
            this.showPanel();
        }
    }

    showPanel() {
        const panel = document.getElementById('tts-panel');
        panel.style.display = 'block';
        setTimeout(() => panel.classList.add('show'), 10);
    }

    hidePanel() {
        const panel = document.getElementById('tts-panel');
        panel.classList.remove('show');
        setTimeout(() => panel.style.display = 'none', 300);
    }

    getTextContent() {
        const content = document.querySelector('.content main') || document.querySelector('.content');
        if (!content) return '';

        const clone = content.cloneNode(true);
        
        // Remove TTS interface and other non-content elements
        const elementsToRemove = clone.querySelectorAll('.tts-container, nav, .nav, .sidenav, .sidebar, script, style');
        elementsToRemove.forEach(el => el.remove());

        return clone.innerText.trim();
    }

    startReading() {
        const text = this.getTextContent();
        if (!text) return;

        this.synth.cancel();

        this.currentUtterance = new SpeechSynthesisUtterance(text);
        this.currentUtterance.rate = this.settings.rate;
        this.currentUtterance.pitch = this.settings.pitch;
        this.currentUtterance.volume = this.settings.volume;
        if (this.settings.voice) {
            this.currentUtterance.voice = this.settings.voice;
        }

        // Progress tracking
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

        this.currentUtterance.onstart = () => {
            this.isPlaying = true;
            this.isPaused = false;
            this.updateUI();
        };

        this.currentUtterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateUI();
            if (progressBar) {
                progressBar.style.width = '0%';
            }
        };

        this.currentUtterance.onerror = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateUI();
        };

        this.synth.speak(this.currentUtterance);
    }

    togglePlayPause() {
        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
        } else {
            this.synth.pause();
            this.isPaused = true;
        }
        this.updateUI();
    }

    stopReading() {
        this.synth.cancel();
        this.isPlaying = false;
        this.isPaused = false;
        this.updateUI();
        
        const progressBar = document.querySelector('.tts-progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    updateUI() {
        const floatingBtn = document.getElementById('tts-main-btn');
        const playIcon = floatingBtn.querySelector('.play-icon');
        const pauseIcon = floatingBtn.querySelector('.pause-icon');
        const playBtn = document.getElementById('tts-play-btn');
        const stopBtn = document.getElementById('tts-stop-btn');

        // Update floating button
        if (this.isPlaying) {
            floatingBtn.classList.add('playing');
            if (this.isPaused) {
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            } else {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }
        } else {
            floatingBtn.classList.remove('playing');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }

        // Update panel buttons
        if (playBtn) {
            playBtn.classList.toggle('active', this.isPlaying && !this.isPaused);
            const playBtnText = playBtn.querySelector('span');
            if (playBtnText) {
                playBtnText.textContent = this.isPlaying && !this.isPaused ? 'Pause' : 'Play';
            }
        }

        if (stopBtn) {
            stopBtn.disabled = !this.isPlaying;
        }
    }
}

// Initialize TTS
document.addEventListener('DOMContentLoaded', function() {
    if ('speechSynthesis' in window) {
        window.mdBookTTS = new mdBookTTS();
    } else {
        console.warn('Text-to-Speech not supported in this browser');
    }
});

// Handle navigation
window.addEventListener('hashchange', function() {
    if (window.mdBookTTS) {
        window.mdBookTTS.stopReading();
    }
});