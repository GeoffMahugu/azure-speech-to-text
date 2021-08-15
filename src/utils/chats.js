const getChats = () => {
    return [
        {
            id: '583ca152-fe18-11eb-9a03-0242ac130003',
            name: 'Adams Casey',
            img: '/avators/1.jpeg',
            text: 'Just met Jena on my ay to the spot. Waiting for you.',
            time: '3 mins Ago',
            status: true,
            messageList: getDefMessages(),
        },
        {
            id: '62366422-fe18-11eb-9a03-0242ac130003',
            name: 'Elijah Babcock',
            img: '/avators/2.jpg',
            text: 'Hey, Dude!! we still on for Friday ?',
            time: '15 mins Ago',
            status: true,
            messageList: getDefMessages(),

        },
        {
            id: '6cfa801e-fe18-11eb-9a03-0242ac130003',
            name: 'Jane Akins',
            img: '/avators/3.jpeg',
            text: 'Wanted to remind you of Mum\'s comming birthday party.',
            time: '18 mins Ago',
            status: true,
            messageList: getDefMessages(),

        },
        {
            id: '75877dea-fe18-11eb-9a03-0242ac130003',
            name: 'John Smith',
            img: '/avators/4.jpeg',
            text: 'Tried to call you earlier.',
            time: '1h Ago',
            status: false,
            messageList: getDefMessages(),

        },
        {
            id: '7c6996ca-fe18-11eb-9a03-0242ac130003',
            name: 'Karl William',
            img: '/avators/5.jpg',
            text: 'Meeting went well. We need to close the deal asap.',
            time: '1h Ago',
            status: false,
            messageList: getDefMessages(),

        },
        {
            id: '8529fade-fe18-11eb-9a03-0242ac130003',
            name: 'Bailey Krista',
            img: '/avators/6.jpeg',
            text: 'Could you pass by the grocery to get me some fruits. Pls!!        ',
            time: '3h Ago',
            status: false,
            messageList: getDefMessages(),
        },
    ];
};


const fetchUser = (id) => {
    const users = getChats();
    const filtered_user = users.filter(user => user.id === id);
    if (filtered_user) {
        return filtered_user[0];
    } else {
        return users[0];
    }

}


const getDefMessages = () => {
    return [
        {
            text: 'Dude',
            sender: true,
        },
        {
            text: 'Hey!',
            sender: false,
        },
        {
            text: 'You there?',
            sender: false,
        },
        {
            text: 'Hello, how\'s it going?',
            sender: false,
        },
        {
            text: 'Great thanks!',
            sender: true,
        },
        {
            text: 'How about you?',
            sender: true,
        },
    ]
}


export { getChats, fetchUser };