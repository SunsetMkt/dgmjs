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

import React from "react";
import { Panel } from "../common/panel";
import { Button } from "@/components/ui/button";
import {
  AlignCenterHorizontalIcon,
  AlignCenterVerticalIcon,
  AlignEndHorizontalIcon,
  AlignEndVerticalIcon,
  AlignStartHorizontalIcon,
  AlignStartVerticalIcon,
} from "lucide-react";
import {
  AlignBringForwardIcon,
  AlignBringToFrontIcon,
  AlignSendBackwardIcon,
  AlignSendToBackIcon,
} from "@/components/icons";
import { ShapeEditorProps } from "@/types";

export const AlignmentPanel: React.FC<ShapeEditorProps> = ({
  shapes,
  onChange,
}) => {
  return (
    <Panel title="Alignment" borderTop>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignLeft()}
            >
              <AlignStartVerticalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignCenter()}
            >
              <AlignCenterVerticalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignRight()}
            >
              <AlignEndVerticalIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.bringToFront()}
            >
              <AlignBringToFrontIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.bringForward()}
            >
              <AlignBringForwardIcon size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignTop()}
            >
              <AlignStartHorizontalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignMiddle()}
            >
              <AlignCenterHorizontalIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.alignBottom()}
            >
              <AlignEndHorizontalIcon size={16} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.sendBackward()}
            >
              <AlignSendToBackIcon size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => window.editor.actions.sendToBack()}
            >
              <AlignSendBackwardIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
};
