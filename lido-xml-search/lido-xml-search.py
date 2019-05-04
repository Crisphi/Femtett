#Simple search tool for lido-XML datasets 

#Ver 1.0 
#2019/04/16 - 21:00
#by Cristian Ortega Singer

import os
import xml.etree.ElementTree as ET

#directory in which the lido-XML-dataset is saved
os.chdir("C:\\Users\\CrisO\\Downloads\\Documents\\Studium\\Coding da Vinci\\Femtett\\DeutschesMuseumPortraits-Daten\\dm_digiporta_xml-190221.tar\\dm_digiporta_xml-190221\\dm_digiporta_xml-190221")
path = os.getcwd()
files = []
files = os.listdir(path) #creates a list of all file-names
print("File-list created. Searching for elements...")

lido = "{http://www.lido-schema.org}"
count = 0
matches = []

#goes through all files in "files" 
for x in files: 
    #creates a tree
    tree = ET.parse(x)
    root = tree.getroot()
    #searches for elements, which match the criteria of the given path (in XPath) and returns them in a list 
    match = root.findall(".//" + str(lido)+ "subject[@" + str(lido) + "type='portrait']/"+str(lido)+"subjectActor/"+str(lido)+"actor/["+str(lido)+"genderActor='weiblich']")
    
    #counts the found matches
    if len(match) != 0:
        matches.append(x)
        count += 1
        print(x)
    
print("Matches: " + str(count))

#creates a String out of "match"
strMatches = ""
for x in matches:
    strMatches += str(x) + "\n"
#directory in which you want to safe your result. 
os.chdir("C:\\Users\\CrisO\\Downloads\\Documents\\Studium\\Coding da Vinci\\Femtett")
#creates, writes & closes  a file.
f = open("matches.txt", "w+") 
#Caution! Rename the file, if you run the code the second time or the program will overwrite the file from the first run!" 
f.write("Matches: " + str(count) + "\n\n\n" + str(strMatches))
f.close()