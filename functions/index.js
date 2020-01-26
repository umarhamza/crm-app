// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
}

exports.clientCreated = functions.firestore
        .document('clients/{clientId}')
        .onCreate(doc => {
            const client = doc.data();
            const notification = {
                content: 'Added a new client',
                user: `${client.authorFirstName} ${client.authorLastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification)
})

exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })
})