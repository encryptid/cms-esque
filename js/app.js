window.addEventListener('load', function () {
    console.log('tied together!');

    let coffee = [
        { name: 'Pourover', description: 'Your favorite bean, fresh ground with hot water poured over it.', price: '$3' },
        { name: 'Americano', description: "Espresso and water. Don't trust your barista? This is how you ensure your coffee is fresh.", price: '$3' },
        { name: 'Aeropress', description: "Hot water, forced thru coffee grounds. Sort of like espresso, but not exactly.", price: '$3' },
        { name: 'Vacuum Pot', description: "Remember in Breaking Bad where that Gale Boetticher guy made coffee in this crazy contraption? This is kinda like that. Come for the coffee, stay for the show.", price: '$4' },
        { name: 'Fall Latte', description: 'Cinnamon, cardamom, star anise, baby powder, and vanilla bean all hung out in a jar to one day come together into this foamy concoction.', price: '$4.50' },
        { name: 'Espresso Mule', description: 'You know, I thought it sounded gross at first, too, but ginger beer, lime and espresso go together better than you would think.', price: '$5' },
        { name: 'Cold Brew', description: "I don't believe coffee should be served cold, but I made it for you, anyway because I'm nice.", price: '$2.50' },
        { name: 'Nitro Cold Brew', description: "If coffee, science, and marketing had a baby, it would be this. And like babies, everybody pretends it's cuter than it actually is.", price: '$3.50' },
    ];

    let menu = document.querySelector('.menu');
    let addItem = document.querySelector('.addItem');
    let menadd = document.querySelector('#menuTab');
    let addTab = document.querySelector('#addTab');
    let btn = document.querySelector('button');

    function addItems() {
        for (let i = 0; i < coffee.length; i++) {
            let menuItem = document.createElement('ul');
            let name = document.createElement('li');
            let title = document.createElement('h2');
            let desc = document.createElement('li');
            let price = document.createElement('li');
            desc.classList.add('desc');
            title.textContent = coffee[i].name;
            desc.textContent = coffee[i].description;
            price.textContent = coffee[i].price;
            menu.appendChild(menuItem);
            name.appendChild(title);
            menuItem.appendChild(name);
            menuItem.appendChild(desc);
            menuItem.appendChild(price);
        };
    };
    addItems();

    menuTab.addEventListener('click',function() {
        console.log('click works!');
        console.log(menu.classList.contains('hidden'));
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            addItem.classList.add('hidden');
        }
    });

    addTab.addEventListener('click',function() {
        console.log('click works!');
        if (addItem.classList.contains('hidden')) {
            addItem.classList.remove('hidden');
            menu.classList.add('hidden');
        };
    });

    btn.addEventListener('click', function() {
        let name = document.querySelector('#name');
        let desc = document.querySelector('#desc');
        let price = document.querySelector('#price');
        /* Two possible approaches here:
        1. rework the addItems function to check for existing items before
            adding it to the DOM and pushing the value of these inputs to the
            coffee object or
        2. Simply use this function to create a new element every time the
            button is pressed. This is a less elegant solution, considering 
            the code to create elements is already in play.
        */
    });

});