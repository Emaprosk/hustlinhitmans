import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
//text, valor, setValor, type, placeholder
const Pop = (promps) => {
    const popover = (message) => (
        <Popover id="popover-basic">
            <Popover.Header as="h3" style={{ background: "black" }}>
                Info
            </Popover.Header>
            <Popover.Body>{message}</Popover.Body>
        </Popover>
    );

    const [showPopover, setShowPopover] = useState(false);

    const handleHidePopover = () => {
        setShowPopover(false);
    };
    //text, valor, setValor, type, placeholder
    return (
        <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popover(promps.text)}
            show={showPopover}
            onHide={handleHidePopover}
        >
            <input
                style={{ background: "black", color: "white" }}
                value={promps.valor}
                onChange={(e) => promps.setValor(e.target.value)}
                type={promps.type}
                className="form-control"
                placeholder={promps.placeholder}
                onFocus={() => setShowPopover(true)}
                onBlur={() => setShowPopover(false)}
            ></input>
        </OverlayTrigger>
    );
};

export default Pop;
