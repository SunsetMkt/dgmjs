---
editUrl: false
next: false
prev: false
title: "Manipulator"
---

Manipulator

## Constructors

### new Manipulator()

> **new Manipulator**(): [`Manipulator`](/api-core/classes/manipulator/)

#### Returns

[`Manipulator`](/api-core/classes/manipulator/)

#### Source

[editor.ts:1425](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1425)

## Properties

### controllers

> **controllers**: [`Controller`](/api-core/classes/controller/)[]

Controllers of the manipulator

#### Source

[editor.ts:1418](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1418)

***

### draggingController

> **draggingController**: `null` \| [`Controller`](/api-core/classes/controller/)

Dragging controller

#### Source

[editor.ts:1423](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1423)

## Methods

### draw()

> **draw**(`editor`, `shape`): `void`

Draw controllers

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

#### Returns

`void`

#### Source

[editor.ts:1549](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1549)

***

### drawHovering()

> **drawHovering**(`editor`, `shape`, `e`): `void`

Draw hovering for the shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[editor.ts:1561](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1561)

***

### isDragging()

> **isDragging**(): `boolean`

Returns one of controllers is dragging or not

#### Returns

`boolean`

#### Source

[editor.ts:1433](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1433)

***

### keyDown()

> **keyDown**(`editor`, `shape`, `e`): `boolean`

Handle keydown event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

handled or not

#### Source

[editor.ts:1516](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1516)

***

### keyUp()

> **keyUp**(`editor`, `shape`, `e`): `boolean`

Handle keyup event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

handled or not

#### Source

[editor.ts:1533](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1533)

***

### mouseCursor()

> **mouseCursor**(`editor`, `shape`, `e`): `null` \| [`string`, `number`]

Returns mouse cursor for the manipulator

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`null` \| [`string`, `number`]

cursor object

#### Source

[editor.ts:1450](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1450)

***

### mouseIn()

> **mouseIn**(`editor`, `shape`, `e`): `boolean`

Returns true if mouse cursor is inside the shape or control points

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

#### Source

[editor.ts:1440](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1440)

***

### pointerDown()

> **pointerDown**(`editor`, `shape`, `e`): `boolean`

Handle pointer down event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[editor.ts:1470](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1470)

***

### pointerMove()

> **pointerMove**(`editor`, `shape`, `e`): `boolean`

Handle pointer move event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[editor.ts:1488](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1488)

***

### pointerUp()

> **pointerUp**(`editor`, `shape`, `e`): `boolean`

Handle pointer up event

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **shape**: [`Shape`](/api-core/classes/shape/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`boolean`

handled or not

#### Source

[editor.ts:1503](https://github.com/dgmjs/dgmjs/blob/c296d113d513e412f08f9016159ca40d11e704cd/packages/core/src/editor.ts#L1503)