
<img src= "src/logo.png" width = 150 height = 150></img>

# Gitvwr
Gitvwr is a lightweight, secure, and real time chrome extension that notifies users via email when their Github profile has been viewed(LinkedIn style). It uses chrome's Listeners and web sockets for real time connection between the extension and the NodeJS socket.io server. It is still under development and hasn't been deployed to the chrome store. The server code is <a href="https://github.com/MediBoss/GitviewrServer">here</a>.

## Engineer(s)

* **Medi Assumani** - *Full Stack Developer*

## Project Built With

* Front End : HTML, CSS, Javascript, Reeact
* Back End : Node.js, Express.js, Socket.io, NodeMailer, Github OAuth
* Database : MongoDB

## License

This project is licensed under the Apache 2.0 License - see the <a href="https://github.com/MediBoss/Lofti/blob/master/LICENSE">LICENSE</a> file for details

## Acknowledgments

* Major Hat tip to <a href="https://github.com/bnguyen212">Brian Nguyen</a>
* <a href="https://github.com/matthewlawson">Matt Lawson</a> for his amazing talk on chrome extenion.
* <a href="https://github.com/RinniSwift">Rinni Swift</a> and <a href="https://github.com/woodward4422">Noah Woodward</a> for being my Beta Testers.
* Stack overflow

## ToDO

- [ ] Improve PopUp view with Boostrap and React on Front End
- [x] Integrate Database(MongoDB) Query
- [ ] Migrate to SOA architecture on Back end
- [ ] Review project rubric
- [ ] Add user Auth on Backend
- [ ] Deploy to chrome store
- [ ] Add socket broadcasting for multiple clients.
- [ ] Declutter app.js and add routes.
- [x] Add Real time views counter on client 

<i>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</i>
