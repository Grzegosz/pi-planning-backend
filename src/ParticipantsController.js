let express = require('express');
let router = express.Router();

router.get('/metrics/meetings/:meetingId/participants', (req, res) => {
    let response;
    if (req.params.meetingId === "123") {
        response = {
            "page_count": 1,
            "page_size": 30,
            "total_records": 2,
            "next_page_token": "",
            "participants": [
                {
                    "id": "d52f19c548b88490b5d16fcbd38",
                    "user_id": "32dsfsd4g5gd",
                    "user_name": "Grzegorz Kozak",
                    "device": "WIN",
                    "ip_address": "127.0.0.1",
                    "location": "New York",
                    "network_type": "Wired",
                    "microphone": "Plantronics BT600",
                    "speaker": "Plantronics BT600",
                    "data_center": "SC",
                    "connection_type": "P2P",
                    "join_time": "2019-09-07T13:15:02.837Z",
                    "leave_time": "2019-09-07T13:15:09.837Z",
                    "share_application": false,
                    "share_desktop": true,
                    "share_whiteboard": true,
                    "recording": false,
                    "pc_name": "dojo's pc",
                    "domain": "Dojo-workspace",
                    "mac_addr": " 00:0a:95:9d:68:16",
                    "harddisk_id": "sed proident in",
                    "version": "4.4.55383.0716",
                    "leave_reason": "Dojo left the meeting.<br>Reason: Host ended the meeting."
                },
                {
                    "id": "z8aaaaaaCfp8uQ",
                    "user_id": "1670000000",
                    "user_name": "Michal Tokarz",
                    "device": "Android",
                    "ip_address": "120.000.000",
                    "location": "San Jose (US)",
                    "network_type": "Wifi",
                    "data_center": "SC",
                    "connection_type": "UDP",
                    "join_time": "2019-08-02T15:31:48Z",
                    "leave_time": "2019-08-02T16:04:12Z",
                    "share_application": false,
                    "share_desktop": false,
                    "share_whiteboard": false,
                    "recording": false,
                    "pc_name": "Rea's PC",
                    "domain": "Rea-workspace",
                    "mac_addr": "",
                    "harddisk_id": "",
                    "version": "4.4.55383.0716",
                    "leave_reason": "Rea left the meeting.<br>Reason: Host closed the meeting."
                }
            ]
        };
    } else if (req.params.meetingId === "234") {
        response = {
            "participants": []
        };
    } else {
        response = {
            "participants": [
                {
                    "user_name": "Piotr Lepik",
                },
                {
                    "user_name": "Karol Tomczyk",
                },
                {
                    "user_name": "Marcin Tomczyk",
                },
                {
                    "user_name": "Michal Stradowski",
                },
                {
                    "user_name": "Jacek Idzik",
                },
                {
                    "user_name": "Jaroslaw Golabek",
                },
                {
                    "user_name": "Lukasz Szewc",
                },
                {
                    "user_name": "Lukasz Maziarz",
                },
                {
                    "user_name": "Zbigniew Zbyszkowski",
                },
                {
                    "user_name": "Agent Tomek",
                },
                {
                    "user_name": "Jaroslaw Kaczynski",
                }
            ]
        };

        response.participants = response.participants.slice(0, Math.round(Math.random() * 10));
    }
    setTimeout(() => {
        res.status(200).send(response);
    }, Math.random() * 5000);

});

module.exports = router;
