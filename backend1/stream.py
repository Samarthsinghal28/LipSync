from gtts import gTTS
from pydub import AudioSegment
from pydub.silence import split_on_silence
import os

def addAudio(sentence):
    sr = 22050
    words=sentence.split()

    print(words)

    combined = AudioSegment.empty()
    word_timing=[]

    for word in words:
        tts = gTTS(word)
        tts.save(f'{word}.wav')
        sound = AudioSegment.from_file(f"{word}.wav")
        audio_chunks = split_on_silence(sound,
                                        min_silence_len=1000,
                                        keep_silence=False)
        
        duration_before=len(combined) / 1000.0

        # Putting the file back together
        for chunk in audio_chunks:
            combined += chunk

        # Calculate duration after removing silence
        duration_after = len(combined) / 1000.0

        word_timing.append(duration_after-duration_before)
        #os.remove(f'{word}.wav')
        # Save the processed audio to a new file
        

    combined.export('final.wav', format="wav")

    print(word_timing)
    return

sentence="My name is Samarth"
addAudio(sentence)

