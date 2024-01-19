const user = {
    username: 'Pancratzia',
    email: 'YpY3N@example.com',
    age: 24,
    ranking: 1,
}

const detail = ({username, email}) => {

    console.log(`${username} tiene el correo ${email}`);
}

detail(user);
