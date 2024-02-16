import cv2
from g2p_en import G2p
import re
from math import ceil
import nltk
from nltk.tokenize import sent_tokenize
import numpy as np
import json

def convert_to_list(array):
    if isinstance(array, np.ndarray):
        return array.tolist()
    return array


g2p = G2p()

#pronounciation Dictionary
pronunciation_dict = {'AA': 'a','AE': 'a','AH': 'a','AO': 'o','AW': 'o','AY':'i' ,'B': 'b','CH': 'ch','D': 'd',
    'DH': 'th','EH': 'e','ER': 'l','EY': 'a','F': 'f','G': 'g','HH': 'NAN','IH':'i' ,'IY': 'e','JH': 'j','K': 'k',
    'L': 'l','M': 'm','N': 'n','NG': 'k','OW': 'o','OY': 'o','P': 'p','R': 'r','S': 's','SH': 'sh','T': 't','TH': 'th',
    'UH': 'u','UW': 'o','V': 'v','W': 'w','Y': 'y','Z': 'z','ZH': 's'}


img_dict={'a':1,'o':9,'i':1,'b':2,'ch':4,'d':3,'th':10,'e':1,'l':8,'f':6,'g':7,'j':4,'k':7,'m':2,'n':3,'p':2,'r':1,
          's':3,'sh':4,'t':3,'th':10,'u':11,'v':6,'w':12,'y':3,'z':3}

def imgIndex(text,duration):
    sentences = sent_tokenize(text)
    i=0
    final_arr=[]
    duration[0]=duration[0]-1
    duration_arr=np.array([])
    duration_arr = np.append(duration_arr, 1000)
    for sentence in sentences:
        sentence=re.sub(r'[^\w\s]','',sentence)
        phonemes = g2p(sentence)
        arr=[]
        arr.append(13)
        for p in phonemes:
            if(len(p)==3):
                p=p[:2]
            if(p=='HH'):
                continue
            if(p==' '):
                continue
            else:
                arr.append(img_dict[pronunciation_dict[p]])
        
        length_arr=len(arr)
        durationEachPhoneme=(duration[i]*1000)/float(length_arr)
        dur_arr=np.full(length_arr, str(durationEachPhoneme))
        final_arr=final_arr+arr
        duration_arr = convert_to_list(np.concatenate((duration_arr, dur_arr)))
        i=i+1

    
    sum=0
    for j in duration_arr:
        sum=sum + float(j)

    # print(sum)

    return final_arr,duration_arr

# imgIndex("Virat Kohli is an Indian international cricketer who has been one of the most prominent figures in world cricket. Born on November 5, 1988, in Delhi, India, Kohli has served as the captain of the Indian national cricket team.  Known for his aggressive batting style, Kohli is considered one of the best batsmen in the world. He made his international debut for India in August 2008 in an ODI against Sri Lanka. Over the years, he has achieved numerous records and accolades, including being the fastest player to reach 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).  In 2013, Virat Kohli took over the captaincy of the Indian Test team, and in 2017, he became the captain of the limited-overs formats as well. He has led the Indian team to several victories and has been a key player in many successful campaigns.  Please note that the information provided here is based on my last update in January 2022, and there may have been developments or changes since then. For the latest information, I rec",[7.240272108843538, 7.749614512471656, 5.616281179138323, 5.529206349206348, 12.379092970521544, 8.983174603174604, 6.095192743764173, 8.576825396825392, 2.1768253968254])
    

        