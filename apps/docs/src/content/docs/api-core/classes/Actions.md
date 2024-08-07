---
editUrl: false
next: false
prev: false
title: "Actions"
---

Editor actions

## Constructors

### new Actions()

> **new Actions**(`editor`): [`Actions`](/api-core/classes/actions/)

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

[`Actions`](/api-core/classes/actions/)

#### Source

[actions.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L29)

## Properties

### editor

> **editor**: [`Editor`](/api-core/classes/editor/)

#### Source

[actions.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L27)

## Methods

### addPage()

> **addPage**(`position`?): [`Page`](/api-core/classes/page/)

Add a page

#### Parameters

• **position?**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:50](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L50)

***

### alignBottom()

> **alignBottom**(`shapes`?): `void`

Align selected shapes to bottom

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:602](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L602)

***

### alignCenter()

> **alignCenter**(`shapes`?): `void`

Align selected shapes to horizontally center

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:541](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L541)

***

### alignLeft()

> **alignLeft**(`shapes`?): `void`

Align selected shapes to left

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:485](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L485)

***

### alignMiddle()

> **alignMiddle**(`shapes`?): `void`

Align selected shapes to vertically middle

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:630](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L630)

***

### alignRight()

> **alignRight**(`shapes`?): `void`

Align selected shapes to right

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:513](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L513)

***

### alignTop()

> **alignTop**(`shapes`?): `void`

Align selected shapes to top

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:574](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L574)

***

### bringForward()

> **bringForward**(`shapes`?): `void`

Bring selected shapes forward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:445](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L445)

***

### bringToFront()

> **bringToFront**(`shapes`?): `void`

Bring selected shapes to front

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:405](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L405)

***

### copy()

> **copy**(`shapes`?): `Promise`\<`void`\>

Copy selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:179](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L179)

***

### cut()

> **cut**(`shapes`?): `Promise`\<`void`\>

Cut selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:190](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L190)

***

### duplicate()

> **duplicate**(`shapes`?): `void`

Duplicate shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:276](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L276)

***

### duplicatePage()

> **duplicatePage**(`page`, `position`): [`Page`](/api-core/classes/page/)

Duplicate a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

• **position**: `number`

#### Returns

[`Page`](/api-core/classes/page/)

#### Source

[actions.ts:94](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L94)

***

### group()

> **group**(`shapes`?): `void`

Group selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:340](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L340)

***

### insert()

> **insert**(`shape`, `parent`?): `void`

Insert a shape into the current page or another shape

#### Parameters

• **shape**: [`Shape`](/api-core/classes/shape/)

The shape to insert

• **parent?**: [`Shape`](/api-core/classes/shape/)

The parent shape to insert the shape into. If not provided, the shape will be inserted into the current page

#### Returns

`void`

#### Source

[actions.ts:115](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L115)

***

### move()

> **move**(`dx`, `dy`, `shapes`?): `void`

Move selected shapes

#### Parameters

• **dx**: `number`

• **dy**: `number`

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:303](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L303)

***

### paste()

> **paste**(`page`?): `Promise`\<`void`\>

Paste

#### Parameters

• **page?**: [`Page`](/api-core/classes/page/)

#### Returns

`Promise`\<`void`\>

#### Source

[actions.ts:211](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L211)

***

### redo()

> **redo**(): `void`

Redo

#### Returns

`void`

#### Source

[actions.ts:43](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L43)

***

### remove()

> **remove**(`shapes`?): `void`

Remove selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:161](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L161)

***

### removePage()

> **removePage**(`page`): `void`

Remove a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

#### Returns

`void`

#### Source

[actions.ts:72](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L72)

***

### reorderPage()

> **reorderPage**(`page`, `position`): `void`

Reorder a page

#### Parameters

• **page**: [`Page`](/api-core/classes/page/)

• **position**: `number`

#### Returns

`void`

#### Source

[actions.ts:83](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L83)

***

### sendBackward()

> **sendBackward**(`shapes`?): `void`

Send selected shapes backward

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:465](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L465)

***

### sendToBack()

> **sendToBack**(`shapes`?): `void`

Send selected shapes to back

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:425](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L425)

***

### undo()

> **undo**(): `void`

Undo

#### Returns

`void`

#### Source

[actions.ts:36](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L36)

***

### ungroup()

> **ungroup**(`shapes`?): `void`

Ungroup selected shapes

#### Parameters

• **shapes?**: [`Shape`](/api-core/classes/shape/)[]

#### Returns

`void`

#### Source

[actions.ts:375](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L375)

***

### update()

> **update**(`values`, `objs`?): `void`

Update obj properties

#### Parameters

• **values**: `Partial`\<[`Shape`](/api-core/classes/shape/) & [`Doc`](/api-core/classes/doc/) & [`Page`](/api-core/classes/page/) & [`Box`](/api-core/classes/box/) & [`Path`](/api-core/classes/path/) & [`Line`](/api-core/classes/line/) & [`Rectangle`](/api-core/classes/rectangle/) & [`Ellipse`](/api-core/classes/ellipse/) & [`Text`](/api-core/classes/text/) & [`Image`](/api-core/classes/image/) & [`Connector`](/api-core/classes/connector/) & [`Freehand`](/api-core/classes/freehand/) & [`Highlighter`](/api-core/classes/highlighter/) & [`Group`](/api-core/classes/group/) & [`Frame`](/api-core/classes/frame/) & [`Embed`](/api-core/classes/embed/)\>

• **objs?**: [`Obj`](/api-core/classes/obj/)[]

#### Returns

`void`

#### Source

[actions.ts:130](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/actions.ts#L130)
