module.exports = function(RED) {
    function panelserverNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
            var p=msg.payload;
            let settings = {
             name: p.name || node.name || "",
             unitId: p.unitId || node.unitId,
             data: p.data || node.data,
            };
            var res = {};
            switch(settings.data){
              case 0:
              case "Product range":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 10,
                    quantity: 16,
                    };
                res.topic = "Product range";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 1:
              case "Product family":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 26,
                    quantity: 16,
                    };
                res.topic = "Product family";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 2:
              case "Vendor URL":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 42,
                    quantity: 17,
                    };
                res.topic = "Vendor URL";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 3:
              case "Commercial Reference":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 60,
                    quantity: 16,
                    };
                res.topic = "Commercial Reference";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 4:
              case "Hardware Version":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 80,
                    quantity: 6,
                    };
                res.topic = "Hardware Version";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 6:
              case "Serial number":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 100,
                    quantity: 6,
                    };
                res.topic = "Serial number";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 6:
              case "Firmware Version":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 120,
                    quantity: 6,
                    };
                res.topic = "Firmware Version";
                res.format = "ASCII";
                res.model = "PanelServer";
                res.unit = "";
              break;
              case 7:
              case "Health State":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 158,
                    quantity: 1,
                    };
                res.topic = "Health State";
                res.format = "float32";
                res.model = "PanelServer";
                res.unit = "";
              break;    
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("PanelServer",panelserverNode);
}
