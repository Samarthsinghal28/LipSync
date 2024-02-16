from pydub import AudioSegment
from pydub.silence import split_on_silence


# Reading and splitting the audio file into chunks
sound = AudioSegment.from_file("aud.wav")



audio_chunks = split_on_silence(sound
                            ,min_silence_len = 100
                            ,silence_thresh = -45
                            ,keep_silence = 50
                        )

# Putting the file back together
combined = AudioSegment.empty()
for chunk in audio_chunks:
    combined += chunk
combined.export('./output.mp3', format = "wav")