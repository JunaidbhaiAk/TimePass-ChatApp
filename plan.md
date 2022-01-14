#plan

1. Login or SignUp
2. if Logdin shift to MainApp else signUp and add user to global
- create AccountContext where all currently logindin person info will save(fetch info from global user);
- if(friend empty) create friends else show recent friends in sidebar
                   - create friend add friend to your friend list using api
- if user(clicked) on any person on sidebar create context of person whose have been 
  clicked and set it info from global;
  - if conversation is alredy avilabel do nothing else new conversation create it;

3. fetch previous messages from db if avilabel

4. if user inputed message then add it to db;

for realtime Chatting use Socket.io

1. create a server for socket;
2. create socket for connection;
3. on connection get message from client;
4. emit message on client side to reciver;
5. set message to all message;
6. disconnect user;

Schema  - Total(4)
    * message
        - {
            senderId,
            conversationId,
            message:[messages]  
          }
    * conversation
        - {
            Objectid - Mainly after known as conversationId
            between:[senderid,reciverid]
          }
    * friend
        - {
            userid -  AccountId from Client Side
            friends - 
            [
                users - same as global user schema;
            ]
          }
    * global user 
        - 
        {
            googleId,
            imageUrl,
            name,
            mail,
        }

