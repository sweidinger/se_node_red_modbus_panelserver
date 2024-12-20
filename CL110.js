module.exports = function(RED) {
    function CL110Node(config) {
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
                case "Load Monitoring - Alarm":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 3297, quantity: 2 };
                    res.topic = "Load Monitoring - Alarm";
                    res.format = "BITMAP";
                    break;

                case "Battery voltage":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 3315, quantity: 2 };
                    res.topic = "Battery voltage";
                    res.format = "Float32";
                    break;

                case "Temperature value":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 4000, quantity: 2 };
                    res.topic = "Temperature value";
                    res.format = "Float32";
                    break;

                case "Virtual Modbus server address":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31025, quantity: 1 };
                    res.topic = "Virtual Modbus server address";
                    res.format = "UINT16";
                    break;

                case "Wireless device RF-Id":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31026, quantity: 4 };
                    res.topic = "Wireless device RF-Id";
                    res.format = "UINT64";
                    break;

                case "Wireless product identifier":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31031, quantity: 1 };
                    res.topic = "Wireless product identifier";
                    res.format = "UINT16";
                    break;

                case "Vendor name":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31044, quantity: 16 };
                    res.topic = "Vendor name";
                    res.format = "ASCII";
                    break;

                case "Commercial reference":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31060, quantity: 16 };
                    res.topic = "Commercial reference";
                    res.format = "ASCII";
                    break;

                case "Firmware revision":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31076, quantity: 6 };
                    res.topic = "Firmware revision";
                    res.format = "ASCII";
                    break;

                case "Hardware revision":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31082, quantity: 6 };
                    res.topic = "Hardware revision";
                    res.format = "ASCII";
                    break;

                case "Serial number":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31088, quantity: 10 };
                    res.topic = "Serial number";
                    res.format = "ASCII";
                    break;

                case "Product range":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31098, quantity: 8 };
                    res.topic = "Product range";
                    res.format = "ASCII";
                    break;

                case "Product model":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31106, quantity: 8 };
                    res.topic = "Product model";
                    res.format = "ASCII";
                    break;

                case "Product family":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31114, quantity: 8 };
                    res.topic = "Product family";
                    res.format = "ASCII";
                    break;

                case "Validity of the RF":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31144, quantity: 2 };
                    res.topic = "Validity of the RF";
                    res.format = "BITMAP";
                    break;

                case "PER":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31156, quantity: 2 };
                    res.topic = "PER";
                    res.format = "Float32";
                    break;

                case "RSSI":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31158, quantity: 2 };
                    res.topic = "RSSI";
                    res.format = "Float32";
                    res.unit = "dBm";
                    break;

                case "LQI":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31160, quantity: 1 };
                    res.topic = "LQI";
                    res.format = "UINT16";
                    break;

                case "Communication status":
                    res.payload = { fc: 3, unitid: settings.unitId, address: 31145, quantity: 2 };
                    res.topic = "Communication status";
                    res.format = "BITMAP";
                    break;

                default:
                    node.error("Invalid data request", msg);
                    return;
            }
            res.model = "CL110";
            res.unit = res.unit || ""; // Default empty unit
            node.send(res);
        });
    }
    RED.nodes.registerType("CL110", CL110Node);
};