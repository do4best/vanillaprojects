from tkinter import *

myroot = Tk();
btn1 = Button(myroot,text="Hello Friend")
label1 = Label(myroot,text="Python",width=20,height=2,underline=0,font=('Calibri',15),fg='#00ff00')
btn1.grid(row=0,column=1,padx=10,pady=20)
label1.grid(row=1,column=1)
myroot.mainloop();
print("python")