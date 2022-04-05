const jwt = require('jsonwebtoken'); // secret key

class Login {

    static login(req, res) {

        const data = req.body;

        if (data.password === '123456' && data.id === 1) {

            const token = jwt.sign({ // ini ngebuat token
                id: data.id, // value yang diambil ketika jwt varified
                pass : data.password
            }, 'jkbjscco3432f')

            res.status(200).json({ token });

        } else {
            res.status(401).json({ message: 'wrong password/unauthorized' })
        }

    }

    static login2(req, res) {

        const data = req.body;

        if (data.id === 2 && data.password === '111213') {

            const token = jwt.sign({ // ini ngebuat token
                id: data.id, // value yang diambil ketika jwt varified
                pass : data.password
            }, 'asascascafad343')

            res.status(200).json({ token });

        } else {
            res.status(401).json({ message: 'unauthorized' })
        }

    }
}

module.exports = Login;

//-------------------------------------------------------------------------------------------

// NOTE :
// 1 create merchant / end point (url yang di akses) ada parameternya : id, pass
// ini di simpen di db
// setelah ini login
// pas login > di kirim data id dan pass / pembuatan jwt
// didalem fungsi login : di cek aapakah id dan pass sesuai dengan yang ada di db
// jika ada, di kasih jwt
// jika tidak : error