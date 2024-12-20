
module.exports = function(RED) {
    function TH110Node(config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;

        node.on('input', function(msg) {
            var p = msg.payload;
            let settings = {
                name: p.name || node.name || "",
                unitId: p.unitId || node.unitId,
                data: p.data || node.data,
            };

            var res = {};
            switch (settings.data) {
                case "Device internal temperature":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 3131, quantity: 2 };
                    res.topic = "Device internal temperature";
                    res.format = "float32";
                    break;

                case "Device Name":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31000, quantity: 2 };
                    res.topic = "Device Name";
                    res.format = "ASCII";
                    break;
                
                case "Communication status":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31145, quantity: 2 };
                    res.topic = "Communication status";
                    res.format = "BITMAP";
                    break;
                
                case "Temperature value":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 4000, quantity: 2 };
                    res.topic = "Temperature value";
                    res.format = "float32";
                    break;

                case "Product ID of the Panel Server":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 30500, quantity: 1 };
                    res.topic = "Product ID of the Panel Server";
                    res.format = "UINT16";
                    break;

                case "Commercial reference of the Panel Server":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 30501, quantity: 16 };
                    res.topic = "Commercial reference of the Panel Server";
                    res.format = "ASCII";
                    break;

                case "Serial number of the Panel Server":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 30523, quantity: 10 };
                    res.topic = "Serial number of the Panel Server";
                    res.format = "ASCII";
                    break;

                case "Product model of the Panel Server":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 30533, quantity: 8 };
                    res.topic = "Product model of the Panel Server";
                    res.format = "ASCII";
                    break;

                case "Vendor name":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31044, quantity: 16 };
                    res.topic = "Vendor name";
                    res.format = "ASCII";
                    break;

                case "Firmware revision":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31076, quantity: 6 };
                    res.topic = "Firmware revision";
                    res.format = "ASCII";
                    break;

                case "RSSI":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31158, quantity: 2 };
                    res.topic = "RSSI";
                    res.format = "float32";
                    res.unit = "dBm";
                    break;

                case "LQI":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31155, quantity: 1 };
                    res.topic = "LQI";
                    res.format = "UINT16";
                    break;

                case "Wireless device RF-Id":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31026, quantity: 4 };
                    res.topic = "Wireless device radio frequency identifier";
                    res.format = "UINT64";
                    break;

                default:
                    node.error("Invalid data request", msg);
                    return;
            }
            res.model = "TH110";
            res.unit = res.unit || ""; // Default empty unit
            node.send(res);
        });
    }
    RED.nodes.registerType("TH110", TH110Node);
};
