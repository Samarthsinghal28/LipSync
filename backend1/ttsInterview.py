import os
from io import BytesIO
from pydub import AudioSegment
from pydub.silence import split_on_silence
from TTS.api import TTS
import wave
import nltk

from nltk.tokenize import sent_tokenize

def speed_change(sound, speed=1.0):
    # Manually override the frame_rate. This tells the computer how many
    # samples to play per second
    sound_with_altered_frame_rate = sound._spawn(sound.raw_data, overrides={
        "frame_rate": int(sound.frame_rate * speed)
    })

    return sound_with_altered_frame_rate.set_frame_rate(sound.frame_rate)

def split_into_sentences(paragraph):
    sentences = sent_tokenize(paragraph)
    return sentences

def remove_last_milliseconds(input_bytes):
    with wave.open(input_bytes, 'rb') as input_wav:
        params = input_wav.getparams()
        new_nframes = params.nframes - 10000
        params = params._replace(nframes=new_nframes)

        wav_file = BytesIO()
        with wave.open(wav_file, 'wb') as output_wav:
            output_wav.setparams(params)
            output_wav.writeframes(input_wav.readframes(new_nframes))

        return wav_file

def synthesize(text, remove_silence_from_last=False):
    model = TTS("tts_models/en/vctk/vits")
    wav_file = BytesIO()

    speaker = None
    language = None

    if model.is_multi_speaker:
        speaker = "p230"  #using

    if model.is_multi_lingual:
        language = model.languages[0]

    model.tts_to_file(text=text, file_path=wav_file,
                      speaker=speaker,
                      language=language,
                      emotion="Happy",
                      progress_bar=False,
                      
                      )
    wav_file.seek(0)

    if remove_silence_from_last:
        wav_file = remove_last_milliseconds(wav_file)
        wav_file.seek(0)

    return wav_file.read()

def addAudio(text_to_synthesize):

    output_file_path = "aud.wav"
    sentences = split_into_sentences(text_to_synthesize)

    combined_wav_file = AudioSegment.silent()
    duration=[]
    initial_duration=0
    i=0

    for sentence in sentences:
        temp = synthesize(sentence, remove_silence_from_last=True)
        audio=AudioSegment.from_wav(BytesIO(temp))

        combined_wav_file += speed_change(audio,0.8)
        duration_in_seconds = combined_wav_file.duration_seconds - initial_duration
        duration.append(duration_in_seconds)
        initial_duration=combined_wav_file.duration_seconds

    # print(combined_wav_file.duration_seconds)
    # print(sum(duration))
    # print(duration)

    combined_wav_file.export(output_file_path, format="wav")
    

    return duration

# addAudio("Virat Kohli is an Indian international cricketer who has been one of the most prominent figures in world cricket. Born on November 5, 1988, in Delhi, India, Kohli has served as the captain of the Indian national cricket team.  Known for his aggressive batting style, Kohli is considered one of the best batsmen in the world. He made his international debut for India in August 2008 in an ODI against Sri Lanka. Over the years, he has achieved numerous records and accolades, including being the fastest player to reach 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).  In 2013, Virat Kohli took over the captaincy of the Indian Test team, and in 2017, he became the captain of the limited-overs formats as well. He has led the Indian team to several victories and has been a key player in many successful campaigns.  Please note that the information provided here is based on my last update in January 2022, and there may have been developments or changes since then. For the latest information, I rec")