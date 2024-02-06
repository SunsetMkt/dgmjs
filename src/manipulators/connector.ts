/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { Manipulator, manipulatorManager } from "../editor";
import { ConnectorReconnectController } from "../controllers/connector-reconnect";
import { ConnectorMoveSegmentController } from "../controllers/connector-move-segment";
import { ConnectorMoveController } from "../controllers/connector-move";
import { LineMovePointController } from "../controllers/line-move-point";
import { LineAddPointController } from "../controllers/line-add-point";

/**
 * ConnectorManipulator
 */
class ConnectorManipulator extends Manipulator {
  constructor() {
    super();
    this.controllers.push(new ConnectorReconnectController(this));
    this.controllers.push(new LineMovePointController(this, true));
    this.controllers.push(new LineAddPointController(this));
    this.controllers.push(new ConnectorMoveSegmentController(this));
    this.controllers.push(new ConnectorMoveController(this));
  }
}

manipulatorManager.define("Connector", new ConnectorManipulator());

export { ConnectorManipulator };
