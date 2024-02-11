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

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const Empty: React.FC<EmptyProps> = ({
  className,
  message,
  ...others
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className
      )}
      {...others}
    >
      <Label className="text-muted-foreground font-normal">{message}</Label>
    </div>
  );
};
