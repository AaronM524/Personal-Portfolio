    // Simple Loading Controller
            function startLoading() {
                const progressPercent = document.getElementById('progressPercent');
                const loadingText = document.getElementById('loadingText');
                
                // Loading messages
                const messages = [
                    'Loading Experience...',
                    'Preparing Content...',
                    'Almost Ready...'
                ];
                
                let messageIndex = 0;
                let progress = 0;
                
                // Update progress and messages
                const progressInterval = setInterval(() => {
                    progress += 2;
                    progressPercent.textContent = progress + '%';
                    
                    // Change message every 33%
                    if (progress === 33 || progress === 66) {
                        messageIndex++;
                        loadingText.textContent = messages[messageIndex];
                    }
                    
                    // Complete loading at 100%
                    if (progress >= 100) {
                        clearInterval(progressInterval);
                        setTimeout(completeLoading, 500);
                    }
                }, 60); // Updates every 60ms for smooth animation
            }
            
            // Complete loading and show main content
            function completeLoading() {
                const loadingScreen = document.getElementById('loadingScreen');
                const mainContent = document.getElementById('mainContent');
                
                loadingScreen.classList.add('hidden');
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.classList.add('show');
                }, 600);
            }
            
            // Start loading when page loads
            window.addEventListener('load', startLoading);
            
            // Fallback: Start loading after DOM is ready
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(startLoading, 100);
            });