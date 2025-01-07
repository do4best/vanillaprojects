from tkinter import *

root = Tk()
root.geometry('200x200')
root.resizable(0,0)

myint = IntVar()
myint1 = IntVar()
myint2 = IntVar()

myentry = Entry(root,font=('Sans Serif',12),textvariable=myint)
myentry.pack()

myentry1 = Entry(root,font=('Sans Serif',12),textvariable=myint1)
myentry1.pack()

def mydisplay():
   mydata1 = myint.get()
   mydata2 = myint1.get()
   mydata3 = mydata1 * mydata2
   myint2.set(mydata3)
   
my_btn = Button(root, font=('Sans Serif',12), text="Multiply",command=mydisplay)
my_btn.pack()

    

myentry2 = Entry(root,font=('Sans Serif',12),textvariable=myint2)
myentry2.pack()
myentry2.configure(state='readonly')
root.mainloop()