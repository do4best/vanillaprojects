from tkinter import *

root = Tk()
root.geometry('200x200')
root.resizable(0,0)
mystr = StringVar()
print(type(mystr)) 
myEntry = Entry(root,font=('Calibri',12),textvariable=mystr)
myEntry.pack()

def myshow():
    mydata = mystr.get()
    print(mydata)
    mystr.set('')
    
my_btn = Button(root,font=('Calibri',12),text='Get Data',command=myshow)
my_btn.pack()

root.mainloop()