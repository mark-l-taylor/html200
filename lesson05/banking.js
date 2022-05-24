function bank(){
    let balance = 0;
    let runApp = true;
    while (runApp){
        let action = prompt('How can I help you today?\nEnter a letter from one of the following options\nQ : Quits\nW : Withdrawl\nD : Deposit\nB : View Balance')

        switch (action.toUpperCase()) {
            case 'Q':
                console.log('Quit');
                runApp = false;
                break;
            case 'W':
                console.log('Withdrawl');
                let withdrawl = Number(prompt('How much would you like to withdrawl today?'));
                if (withdrawl > 0 && withdrawl < balance) {
                    balance -= Number(withdrawl);
                    alert('Thank you, You have withdrawn $' + withdrawl.toFixed(2) + ' from your account.');
                    break;
                } else if (withdrawl > 0 && withdrawl > balance) {
                    alert('We are sorry but you do not have sufficient funds.');
                    break;
                } else {
                    alert('Sorry that is not a valid amount.');
                    break;
                }
            case 'D':
                console.log('Deposit');
                let deposit = Number(prompt('How much would you like to deposit today?'));
                if (deposit) {
                    balance += Number(deposit);
                    alert('Thank you, We have deposited $' + deposit.toFixed(2) + ' to your account.')
                    break;
                }
                alert('Sorry that is not a valid amount.');
                break;
            case 'B':
                console.log('Balance');
                alert('Your balance is $' + balance.toFixed(2))
                break;
            default:
                console.log('I am not sure how to help you today.')
        }
    }
}