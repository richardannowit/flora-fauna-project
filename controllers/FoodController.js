let register = async (req, res) => {
    try {
        const { food_name,price, description, image_name} = req.body;

        if (!(username && password && first_name && last_name && email && phone)) {
            res.status(400).json({
                message: "All input is required"
            });
        }

        const oldUser = await User.findUser(username);

        if (oldUser) {
            return res.status(409).json({
                message: "User already Exist. Please Login"
            });
        }

        const newUser = await User.createUser({
            first_name,
            last_name,
            username,
            password,
            email,
            phone
        });

        const token = await jwtHelpers.createToken(newUser, token_key, "2h")

        // save user token
        newUser.token = token;

        // return new user
        res.status(201).json({
            data: User.hidePassword(newUser),
            message: 'User created successfull'
        });
    } catch (err) {
        console.log(err);
    }
}
