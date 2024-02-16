import cv2
from g2p_en import G2p
import re
from math import ceil

g2p = G2p()

#pronounciation Dictionary
pronunciation_dict = {'AA': 'a','AE': 'a','AH': 'a','AO': 'o','AW': 'o','AY':'i' ,'B': 'b','CH': 'ch','D': 'd',
    'DH': 'th','EH': 'e','ER': 'l','EY': 'a','F': 'f','G': 'g','HH': 'NAN','IH':'i' ,'IY': 'e','JH': 'j','K': 'k',
    'L': 'l','M': 'm','N': 'n','NG': 'k','OW': 'o','OY': 'o','P': 'p','R': 'r','S': 's','SH': 'sh','T': 't','TH': 'th',
    'UH': 'u','UW': 'o','V': 'v','W': 'w','Y': 'y','Z': 'z','ZH': 's'}


img_dict={'a':1,'o':9,'i':1,'b':2,'ch':4,'d':3,'th':10,'e':1,'l':8,'f':6,'g':7,'j':4,'k':7,'m':2,'n':3,'p':2,'r':1,
          's':3,'sh':4,'t':3,'th':10,'u':11,'v':6,'w':12,'y':3,'z':3}

def imgIndex(sentence,duration):
    sentence=re.sub(r'[^\w\s]','',sentence)
    print(sentence)
    phonemes = g2p(sentence)
    print(phonemes)
    arr=[]
    #arr.append(13)
    for p in phonemes:
        if(len(p)==3):
            p=p[:2]
        if(p=='HH'):
            continue
        if(p==' '):
            continue

        else:
            arr.append(img_dict[pronunciation_dict[p]])
    #arr.append(13)
    totalPhonemene=len(arr)
    durationEachPhoneme=int(duration*20/totalPhonemene)

    final_arr=[0]
    for i in arr:
        for j in range(0,durationEachPhoneme):
            final_arr.append(i)
    
    timeout=duration*1000/(len(final_arr)-1)
    print(timeout)
    final_arr[0]=timeout
    return final_arr
    

        