# Banking App 
# Class Bank
# Withdrawal and  Deposit
# Write the transaction to a python file
# While True:
# Input
# Classes
# Open()
# Method
# Properties

from mimetypes import init


class Bank:

    def __init__(self, default_value=0.00):
        self.credit = default_value

    def log_transaction(self, transaction_string):
        with open("transaction.txt", "a") as file:
            file.write(f"{transaction_string} \t\t\tcredit: {self.credit}\n")

    def withdrawal(self, value):
        try:
            value = float(value)
        except ValueError:
            value = 0
        if value:
            self.credit = self.credit - value
            self.log_transaction(f"Withdrew {value}")

    def deposit(self, value):
        try:
            value = float(value)
        except ValueError:
            value = 0
        if value:
            self.credit = self.credit + value
            self.log_transaction(f"Deposited {value}")

account = Bank(500.0)
while True:
    action = input("\n\t🙏 Welcome to Public Bank 🙏\n\nType 1 to check you current balance.\nType 2 to deposit money in your account.\nType 3 to withdraw money from your account.\nType 0 to exit  \n \n⏩ ")
    if action in ["1", "2", "3", "0"]:
        if action == "1":
            print("")
        elif action == "2":
            value = input("\n💵 Enter the amount you want to deposit: ")
            account.deposit(value)
            print("\n💰 You have deposited: ", value)
        elif action == "3":
            value = float(input("\n💵 Enter the amount you want to withdraw: "))
            if (value > account.credit):
                print("\nYou have insufficient balance.")
            else:
                account.withdrawal(value)
                print("\n💰 You have withdrawed: ", value)
        else:
            print("\n🙏 Thankyou for using our Services 🙏\n\tHave a nice day\n")
            print("\n--------------------------------------------")
            break

        print("💰 Your current balance is: ", account.credit)
        print("\n--------------------------------------------")
    else:
        print("\n🙁 You have entered a wrong option. Please select the correct option from the following list.")
        print("\n--------------------------------------------")