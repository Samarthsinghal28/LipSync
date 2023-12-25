from gtts import gTTS
from pydub import AudioSegment
from pydub.silence import split_on_silence
import os

def addAudio(sentence):
    sr = 22050
    tts = gTTS(sentence)
    tts.save('aud.wav')

    sound = AudioSegment.from_file("aud.wav")
    audio_chunks = split_on_silence(sound,
                                    min_silence_len=100,
                                    silence_thresh=-45,
                                    keep_silence=50)

    # Putting the file back together
    combined = AudioSegment.empty()
    for chunk in audio_chunks:
        combined += chunk

    # Calculate duration after removing silence
    duration = len(combined) / 1000.0
    os.remove('aud.wav')
    # Save the processed audio to a new file
    combined.export('aud.wav', format="wav")

    # Remove the original 'aud.wav' file
    

    return duration
