/**
 * React-Terminal module values
 */
const tinyreq = require('tinyreq');
const freeGeoIPUrl = `http://freegeoip.net/json/?callback=?`

export const history = [
    { value: 'Greetings!' }
    , { value: 'My name is Cameron Dart' }
    , { value: 'I study Math and CS at the University of Illinois' }
    , { value: 'Type `resume` to view my resume' }
];

export const structure = {
    internships: {

    }
    , research: {

    }
    , skills : {

    }
}

export const extensions = {
    clear: {
        exec: ({ structure, history, cwd  }, command) => {
            return { structure, cwd, history: [] };
        },
    },
    sudo: {

    }
}

export const getuserIP = () => {
    let userip = '';
    tinyreq(freeGeoIPUrl, (err, body) => {
        if (err) {
            return 'localhost';
        }
        console.log('body ', body)
        //return body.ip;
    });
}

export const prefix = `friend@localhost`;
