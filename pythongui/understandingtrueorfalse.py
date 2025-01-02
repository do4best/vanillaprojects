def mydatainseration():
    if num1.get() == True:
        str.set("It is set to True")
    else:
        str.set("It is set to False")

from tkinter import *
root = Tk()
root.geometry('500x500')

num1 = BooleanVar()
str = StringVar()
mych1 = Checkbutton(root,variable=num1,font=('Calibri',12),text="Python",command=mydatainseration)
mych1.pack()
myen = Entry(root,width=20,textvariable=str)
myen.pack()
root.mainloop()
