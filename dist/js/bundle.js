!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}([function(e,t){class i{constructor(e){this.name=e,this.color="black"}render(e,t,i){e.fillStyle=this.color,e.fillRect(t.x,t.y,i,i)}}const s={empty:new class extends i{constructor(){super("empty")}},food:new class extends i{constructor(){super("food")}},wall:new class extends i{constructor(){super("wall")}},mouth:new class extends i{constructor(){super("mouth")}},producer:new class extends i{constructor(){super("producer")}},mover:new class extends i{constructor(){super("mover")}},killer:new class extends i{constructor(){super("killer")}},armor:new class extends i{constructor(){super("armor")}},eye:new class extends i{constructor(){super("eye"),this.slit_color="black"}render(e,t,i){if(e.fillStyle=this.color,e.fillRect(t.x,t.y,i,i),1!=i){var s=i/2,r=-i/8,o=-s,n=i/2+i/4,l=i/4;e.translate(t.x+s,t.y+s),e.rotate(90*t.cell_owner.getAbsoluteDirection()*Math.PI/180),e.fillStyle=this.slit_color,e.fillRect(r,o,l,n),e.setTransform(1,0,0,1,0,0)}}},defineLists(){this.all=[this.empty,this.food,this.wall,this.mouth,this.producer,this.mover,this.killer,this.armor,this.eye],this.living=[this.mouth,this.producer,this.mover,this.killer,this.armor,this.eye]},getRandomName:function(){return this.all[Math.floor(Math.random()*this.all.length)].name},getRandomLivingType:function(){return this.living[Math.floor(Math.random()*this.living.length)]}};s.defineLists(),e.exports=s},function(e,t,i){const s=i(4),r={setDefaults:function(){this.lifespanMultiplier=100,this.foodProdProb=4,this.foodProdProbScalar=4,this.killableNeighbors=s.adjacent,this.edibleNeighbors=s.adjacent,this.growableNeighbors=s.adjacent,this.useGlobalMutability=!1,this.globalMutability=5,this.addProb=33,this.changeProb=33,this.removeProb=33,this.moversCanRotate=!0,this.offspringRotate=!0,this.foodBlocksReproduction=!0,this.moversCanProduce=!1,this.instaKill=!1,this.lookRange=20},balanceMutationProbs:function(e){if(1==e){var t=100-this.addProb;this.changeProb=t/2,this.removeProb=t/2}else if(2==e){t=100-this.changeProb;this.addProb=t/2,this.removeProb=t/2}else{t=100-this.removeProb;this.changeProb=t/2,this.addProb=t/2}}};r.setDefaults(),e.exports=r},function(e,t){const i={up:0,right:1,down:2,left:3,scalars:[[0,-1],[1,0],[0,1],[-1,0]],getRandomDirection:function(){return Math.floor(4*Math.random())},getRandomScalar:function(){return this.scalars[Math.floor(Math.random()*this.scalars.length)]},getOppositeDirection:function(e){switch(e){case this.up:return this.down;case this.down:return this.up;case this.left:return this.right;case this.right:return this.left}},rotateRight:function(e){return++e>3&&(e=0),e}};e.exports=i},function(e,t,i){i(0);const s=i(2);e.exports=class{constructor(e,t,i,s){this.state=e,this.org=t,this.loc_col=i,this.loc_row=s;var r=Math.max(2*Math.abs(s)+2,2*Math.abs(i)+2);this.org.birth_distance<r&&(this.org.birth_distance=r)}initInherit(e){this.loc_col=e.loc_col,this.loc_row=e.loc_row}initRandom(){}initDefault(){}performFunction(e){}getRealCol(){return this.org.c+this.rotatedCol(this.org.rotation)}getRealRow(){return this.org.r+this.rotatedRow(this.org.rotation)}getRealCell(){var e=this.getRealCol(),t=this.getRealRow();return this.org.env.grid_map.cellAt(e,t)}rotatedCol(e){switch(e){case s.up:return this.loc_col;case s.down:return-1*this.loc_col;case s.left:return this.loc_row;case s.right:return-1*this.loc_row}}rotatedRow(e){switch(e){case s.up:return this.loc_row;case s.down:return-1*this.loc_row;case s.left:return-1*this.loc_col;case s.right:return this.loc_col}}}},function(e,t){e.exports={all:[[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[1,1],[-1,1],[1,-1]],adjacent:[[0,1],[0,-1],[1,0],[-1,0]],corners:[[-1,-1],[1,1],[-1,1],[1,-1]],allSelf:[[0,0],[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[1,1],[-1,1],[1,-1]]}},function(e,t,i){const s=i(0),r=i(15),o=i(4),n=i(1),l=i(2),a=i(23);class h{constructor(e,t,i,s=null){this.c=e,this.r=t,this.env=i,this.lifetime=0,this.food_collected=0,this.living=!0,this.cells=[],this.is_producer=!1,this.is_mover=!1,this.has_eyes=!1,this.direction=l.down,this.rotation=l.up,this.can_rotate=n.moversCanRotate,this.move_count=0,this.move_range=4,this.ignore_brain_for=0,this.mutability=5,this.damage=0,this.birth_distance=4,this.brain=new a(this),null!=s&&this.inherit(s)}canAddCellAt(e,t){for(var i of this.cells)if(i.loc_col==e&&i.loc_row==t)return!1;return!0}addDefaultCell(e,t,i){var s=r.createDefault(this,e,t,i);return this.cells.push(s),s}addRandomizedCell(e,t,i){e!=s.eye||this.has_eyes||this.brain.randomizeDecisions();var o=r.createRandom(this,e,t,i);return this.cells.push(o),o}addInheritCell(e){var t=r.createInherited(this,e);return this.cells.push(t),t}replaceCell(e,t,i,s=!0){return this.removeCell(t,i,!0),s?this.addRandomizedCell(e,t,i):this.addDefaultCell(e,t,i)}removeCell(e,t,i=!1){if(0==e&&0==t&&!i)return!1;for(var s=0;s<this.cells.length;s++){var r=this.cells[s];if(r.loc_col==e&&r.loc_row==t){this.cells.splice(s,1);break}}return this.checkTypeChange(r.state),!0}getLocalCell(e,t){for(var i of this.cells)if(i.loc_col==e&&i.loc_row==t)return i;return null}checkTypeChange(){for(var e of(this.is_producer=!1,this.is_mover=!1,this.has_eyes=!1,this.cells))e.state==s.producer&&(this.is_producer=!0),e.state==s.mover&&(this.is_mover=!0),e.state==s.eye&&(this.has_eyes=!0)}inherit(e){for(var t of(this.move_range=e.move_range,this.mutability=e.mutability,e.cells))this.addInheritCell(t);if(e.is_mover)for(var i in e.brain.decisions)this.brain.decisions[i]=e.brain.decisions[i]}foodNeeded(){return this.cells.length}lifespan(){return this.cells.length*n.lifespanMultiplier}maxHealth(){return this.cells.length}reproduce(){var e=new h(0,0,this.env,this);n.offspringRotate&&(e.rotation=l.getRandomDirection());var t=this.mutability;n.useGlobalMutability?t=n.globalMutability:Math.random()<=.5?e.mutability++:(e.mutability--,e.mutability<1&&(e.mutability=1)),100*Math.random()<=t&&e.mutate();var i=l.getRandomScalar(),s=i[0],r=i[1],o=Math.floor(3*Math.random()),a=this.birth_distance,c=this.c+s*a+s*o,d=this.r+r*a+r*o;e.isClear(c,d,e.rotation,!0)&&e.isStraightPath(c,d,this.c,this.r,this)&&(e.c=c,e.r=d,this.env.addOrganism(e),e.updateGrid()),this.food_collected-=this.foodNeeded()}mutate(){var e=Math.floor(100*Math.random()),t=!1;if(e<=n.addProb){var i=this.cells[Math.floor(Math.random()*this.cells.length)],r=s.getRandomLivingType(),l=o.all[Math.floor(Math.random()*o.all.length)],a=i.loc_col+l[0],h=i.loc_row+l[1];this.canAddCellAt(a,h)&&(t=!0,this.addRandomizedCell(r,a,h))}else if(e<=n.addProb+n.changeProb){var c=this.cells[Math.floor(Math.random()*this.cells.length)];r=s.getRandomLivingType();this.replaceCell(r,c.loc_col,c.loc_row),t=!0}else if(e<=n.addProb+n.changeProb+n.removeProb&&this.cells.length>1){c=this.cells[Math.floor(Math.random()*this.cells.length)];t=this.removeCell(c.loc_col,c.loc_row)}return this.is_mover&&100*Math.random()<=10&&(this.move_range+=Math.floor(4*Math.random())-2,this.move_range<=0&&(this.move_range=1)),this.is_mover&&this.has_eyes&&100*Math.random()<=10&&this.brain.mutate(),t}attemptMove(){var e=l.scalars[this.direction],t=e[0],i=e[1],r=this.c+t,o=this.r+i;if(this.isClear(r,o)){for(var n of this.cells){var a=this.c+n.rotatedCol(this.rotation),h=this.r+n.rotatedRow(this.rotation);this.env.changeCell(a,h,s.empty,null)}return this.c=r,this.r=o,this.updateGrid(),!0}return!1}attemptRotate(){if(!this.can_rotate)return this.direction=l.getRandomDirection(),this.move_count=0,!0;var e=l.getRandomDirection();if(this.isClear(this.c,this.r,e)){for(var t of this.cells){var i=this.c+t.rotatedCol(this.rotation),r=this.r+t.rotatedRow(this.rotation);this.env.changeCell(i,r,s.empty,null)}return this.rotation=e,this.direction=l.getRandomDirection(),this.updateGrid(),this.move_count=0,!0}return!1}changeDirection(e){this.direction=e,this.move_count=0}isStraightPath(e,t,i,s,r){if(e==i){if(t>s){var o=s;s=t,t=o}for(var n=t;n!=s;n++){var l=this.env.grid_map.cellAt(e,n);if(!this.isPassableCell(l,r))return!1}return!0}if(e>i){o=i;i=e,e=o}for(n=e;n!=i;n++){l=this.env.grid_map.cellAt(n,t);if(!this.isPassableCell(l,r))return!1}return!0}isPassableCell(e,t){return null!=e&&(e.state==s.empty||e.owner==this||e.owner==t||e.state==s.food)}isClear(e,t,i=this.rotation,r=!1){for(var o of this.cells){var l=this.getRealCell(o,e,t,i);if(null==l)return!1;if(!(l.owner==this||l.state==s.empty||!n.foodBlocksReproduction&&l.state==s.food||r&&o.state==s.armor&&l.state==s.food))return!1}return!0}harm(){this.damage++,(this.damage>=this.maxHealth()||n.instaKill)&&this.die()}die(){for(var e of this.cells){var t=this.c+e.rotatedCol(this.rotation),i=this.r+e.rotatedRow(this.rotation);this.env.changeCell(t,i,s.food,null)}this.living=!1}updateGrid(){for(var e of this.cells){var t=this.c+e.rotatedCol(this.rotation),i=this.r+e.rotatedRow(this.rotation);this.env.changeCell(t,i,e.state,e)}}update(){if(this.lifetime++,this.lifetime>this.lifespan())return this.die(),this.living;for(var e of(this.food_collected>=this.foodNeeded()&&this.reproduce(),this.cells))if(e.performFunction(),!this.living)return this.living;if(this.is_mover){this.move_count++;var t=!1;0==this.ignore_brain_for?t=this.brain.decide():this.ignore_brain_for--;var i=this.attemptMove();if(this.move_count>this.move_range&&!t||!i)this.attemptRotate()||(this.changeDirection(l.getRandomDirection()),t&&(this.ignore_brain_for=this.move_range+1))}return this.living}getRealCell(e,t=this.c,i=this.r,s=this.rotation){var r=t+e.rotatedCol(s),o=i+e.rotatedRow(s);return this.env.grid_map.cellAt(r,o)}}e.exports=h},function(e,t){e.exports={None:0,FoodDrop:1,WallDrop:2,ClickKill:3,Select:4,Edit:5,Clone:6,Drag:7}},function(e,t){e.exports=class{constructor(){}update(){alert("Environment.update() must be overriden")}changeCell(e,t,i,s){this.grid_map.setCellType(e,t,i),this.grid_map.setCellOwner(e,t,s)}}},function(e,t,i){i(0),i(2);e.exports=class{constructor(e,t,i){this.cell_size=i,this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext("2d"),this.fillWindow(t),this.height=this.canvas.height,this.width=this.canvas.width,this.cells_to_render=new Set,this.cells_to_highlight=new Set,this.highlighted_cells=new Set}fillWindow(e){this.fillShape($("#"+e).height(),$("#"+e).width())}fillShape(e,t){this.canvas.width=t,this.canvas.height=e,this.height=this.canvas.height,this.width=this.canvas.width}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.height,this.width)}renderFullGrid(e){for(var t of e)for(var i of t)this.renderCell(i)}renderCells(){for(var e of this.cells_to_render)this.renderCell(e);this.cells_to_render.clear()}renderCell(e){e.state.render(this.ctx,e,this.cell_size)}renderOrganism(e){for(var t of e.cells){var i=e.getRealCell(t);this.renderCell(i)}}addToRender(e){this.highlighted_cells.has(e)&&this.cells_to_highlight.add(e),this.cells_to_render.add(e)}renderHighlights(){for(var e of this.cells_to_highlight)this.renderCellHighlight(e),this.highlighted_cells.add(e);this.cells_to_highlight.clear()}highlightOrganism(e){for(var t of e.cells){var i=e.getRealCell(t);this.cells_to_highlight.add(i)}}highlightCell(e){this.cells_to_highlight.add(e)}renderCellHighlight(e,t="yellow"){this.renderCell(e),this.ctx.fillStyle=t,this.ctx.globalAlpha=.5,this.ctx.fillRect(e.x,e.y,this.cell_size,this.cell_size),this.ctx.globalAlpha=1,this.highlighted_cells.add(e)}clearAllHighlights(e=!1){for(var t of this.highlighted_cells)this.renderCell(t);this.highlighted_cells.clear(),e&&this.cells_to_highlight.clear()}}},function(e,t,i){const s=i(10),r=i(0);e.exports=class{constructor(e,t,i){this.resize(e,t,i)}resize(e,t,i){this.grid=[],this.cols=e,this.rows=t,this.cell_size=i;for(var o=0;o<e;o++){for(var n=[],l=0;l<t;l++){var a=new s(r.empty,o,l,o*i,l*i);n.push(a)}this.grid.push(n)}}fillGrid(e){for(var t of this.grid)for(var i of t)i.setType(e),i.owner=null,i.cell_owner=null}cellAt(e,t){return this.isValidLoc(e,t)?this.grid[e][t]:null}setCellType(e,t,i){this.isValidLoc(e,t)&&this.grid[e][t].setType(i)}setCellOwner(e,t,i){this.isValidLoc(e,t)&&(this.grid[e][t].cell_owner=i,this.grid[e][t].owner=null!=i?i.org:null)}isValidLoc(e,t){return e<this.cols&&t<this.rows&&e>=0&&t>=0}getCenter(){return[Math.floor(this.cols/2),Math.floor(this.rows/2)]}xyToColRow(e,t){var i=Math.floor(e/this.cell_size),s=Math.floor(t/this.cell_size);return i>=this.cols?i=this.cols-1:i<0&&(i=0),s>=this.rows?s=this.rows-1:s<0&&(s=0),[i,s]}}},function(e,t,i){i(0),i(1);e.exports=class{constructor(e,t,i,s,r){this.owner=null,this.cell_owner=null,this.setType(e),this.col=t,this.row=i,this.x=s,this.y=r}setType(e){this.state=e}}},function(e,t){e.exports=class{constructor(e,t){this.env=e,this.canvas=t,this.mouse_x,this.mouse_y,this.mouse_c,this.mouse_r,this.left_click=!1,this.right_click=!1,this.cur_cell=null,this.cur_org=null,this.highlight_org=!0,this.defineEvents()}setControlPanel(e){this.control_panel=e}defineEvents(){this.canvas.addEventListener("mousemove",e=>{this.updateMouseLocation(e.offsetX,e.offsetY),this.mouseMove()}),this.canvas.addEventListener("mouseup",function(e){e.preventDefault(),this.updateMouseLocation(e.offsetX,e.offsetY),this.mouseUp(),this.left_click=!1,this.right_click=!1}.bind(this)),this.canvas.addEventListener("mousedown",function(e){e.preventDefault(),this.updateMouseLocation(e.offsetX,e.offsetY),0==e.button&&(this.left_click=!0),2==e.button&&(this.right_click=!0),this.mouseDown()}.bind(this)),this.canvas.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.canvas.addEventListener("mouseleave",function(){this.right_click=!1,this.left_click=!1,this.env.renderer.clearAllHighlights(!0)}.bind(this))}updateMouseLocation(e,t){var i=this.cur_cell,s=this.cur_org;this.mouse_x=e,this.mouse_y=t;var r=this.env.grid_map.xyToColRow(this.mouse_x,this.mouse_y);this.mouse_c=r[0],this.mouse_r=r[1],this.cur_cell=this.env.grid_map.cellAt(this.mouse_c,this.mouse_r),this.cur_org=this.cur_cell.owner,this.cur_org==s&&this.cur_cell==i||(this.env.renderer.clearAllHighlights(!0),null!=this.cur_org&&this.highlight_org?this.env.renderer.highlightOrganism(this.cur_org):null!=this.cur_cell&&this.env.renderer.highlightCell(this.cur_cell,!0))}mouseMove(){alert("mouse move must be overridden")}mouseDown(){alert("mouse down must be overridden")}mouseUp(){alert("mouse up must be overridden")}}},function(e,t,i){const s=i(14),r=i(25),o=i(26),n=i(28);e.exports=class{constructor(){this.fps=60,this.env=new s(5),this.organism_editor=new o,this.controlpanel=new r(this),this.colorscheme=new n(this.env,this.organism_editor),this.colorscheme.loadColorScheme(),this.env.OriginOfLife(),this.last_update=Date.now(),this.delta_time=0,this.actual_fps=0,this.running=!1}start(e=60){e<=0&&(e=1),e>300&&(e=300),this.fps=e,this.game_loop=setInterval(function(){this.environmentUpdate()}.bind(this),1e3/e),this.running=!0,this.fps>=60?null!=this.render_loop&&(clearInterval(this.render_loop),this.render_loop=null):this.setRenderLoop()}stop(){clearInterval(this.game_loop),this.running=!1,this.setRenderLoop()}setRenderLoop(){null==this.render_loop&&(this.render_loop=setInterval(function(){this.necessaryUpdate()}.bind(this),1e3/60))}environmentUpdate(){this.delta_time=Date.now()-this.last_update,this.last_update=Date.now(),this.env.update(this.delta_time),this.actual_fps=1/this.delta_time*1e3,null==this.render_loop&&this.necessaryUpdate()}necessaryUpdate(){this.env.render(),this.controlpanel.update(),this.organism_editor.update()}}},function(e,t,i){"use strict";i.r(t);var s=i(12),r=i.n(s);$("document").ready((function(){(function(){let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e})()&&(alert("Though the simulation still works on mobile, most features are disabled. Try it on desktop for the full experience!"),$(".control-panel").css("display","none")),(new r.a).start(60)}))},function(e,t,i){const s=i(7),r=i(8),o=i(9),n=i(5),l=i(0),a=i(24);e.exports=class extends s{constructor(e){super(),this.renderer=new r("env-canvas","env",e),this.controller=new a(this,this.renderer.canvas);var t=Math.floor(this.renderer.height/e),i=Math.floor(this.renderer.width/e);this.grid_map=new o(i,t,e),this.organisms=[],this.walls=[],this.total_mutability=0,this.auto_reset=!0,this.largest_cell_count=0,this.reset_count=0}update(e){var t=[];for(var i in this.organisms){var s=this.organisms[i];s.living&&s.update()||t.push(i)}this.removeOrganisms(t)}render(){this.renderer.renderCells(),this.renderer.renderHighlights()}removeOrganisms(e){for(var t of e.reverse())this.total_mutability-=this.organisms[t].mutability,this.organisms.splice(t,1);0==this.organisms.length&&this.auto_reset&&(this.reset_count++,this.reset())}OriginOfLife(){var e=this.grid_map.getCenter(),t=new n(e[0],e[1],this);t.addDefaultCell(l.mouth,0,0),t.addDefaultCell(l.producer,1,1),t.addDefaultCell(l.producer,-1,-1),this.addOrganism(t)}addOrganism(e){e.updateGrid(),this.total_mutability+=e.mutability,this.organisms.push(e),e.cells.length>this.largest_cell_count&&(this.largest_cell_count=e.cells.length)}averageMutability(){return this.organisms.length<1?0:this.total_mutability/this.organisms.length}changeCell(e,t,i,s){super.changeCell(e,t,i,s),this.renderer.addToRender(this.grid_map.cellAt(e,t)),i==l.wall&&this.walls.push(this.grid_map.cellAt(e,t))}clearWalls(){for(var e of this.walls)this.grid_map.cellAt(e.col,e.row).state==l.wall&&this.changeCell(e.col,e.row,l.empty,null)}clearOrganisms(){for(var e of this.organisms)e.die();this.organisms=[]}reset(e=!0){this.organisms=[],this.grid_map.fillGrid(l.empty),this.renderer.renderFullGrid(this.grid_map.grid),this.total_mutability=0,this.OriginOfLife()}resizeGridColRow(e,t,i){this.renderer.cell_size=e,this.renderer.fillShape(i*e,t*e),this.grid_map.resize(t,i,e),this.reset()}resizeFillWindow(e){this.renderer.cell_size=e,this.renderer.fillWindow("env");var t=Math.floor(this.renderer.width/e),i=Math.floor(this.renderer.height/e);this.grid_map.resize(t,i,e),this.reset()}}},function(e,t,i){const s=i(16),r=i(17),o=i(18),n=i(19),l=i(20),a=i(21),h=i(0),c={init:function(){var e={};e[h.mouth.name]=s,e[h.producer.name]=r,e[h.mover.name]=o,e[h.killer.name]=n,e[h.armor.name]=l,e[h.eye.name]=a,this.type_map=e},createInherited:function(e,t){var i=new this.type_map[t.state.name](e,t.loc_col,t.loc_row);return i.initInherit(t),i},createRandom:function(e,t,i,s){var r=new this.type_map[t.name](e,i,s);return r.initRandom(),r},createDefault:function(e,t,i,s){var r=new this.type_map[t.name](e,i,s);return r.initDefault(),r}};c.init(),e.exports=c},function(e,t,i){const s=i(0),r=i(3),o=i(1);e.exports=class extends r{constructor(e,t,i){super(s.mouth,e,t,i)}performFunction(){var e=this.org.env,t=this.getRealCol(),i=this.getRealRow();for(var s of o.edibleNeighbors){var r=e.grid_map.cellAt(t+s[0],i+s[1]);this.eatNeighbor(r,e)}}eatNeighbor(e,t){null!=e&&e.state==s.food&&(t.changeCell(e.col,e.row,s.empty,null),this.org.food_collected++)}}},function(e,t,i){const s=i(0),r=i(3),o=i(1);e.exports=class extends r{constructor(e,t,i){super(s.producer,e,t,i),this.org.is_producer=!0}performFunction(){if(!this.org.is_mover||o.moversCanProduce){var e=this.org.env,t=o.foodProdProb,i=this.getRealCol(),r=this.getRealRow();if(100*Math.random()<=t){var n=o.growableNeighbors[Math.floor(Math.random()*o.growableNeighbors.length)],l=n[0],a=n[1],h=e.grid_map.cellAt(i+l,r+a);if(null!=h&&h.state==s.empty)return void e.changeCell(i+l,r+a,s.food,null)}}}}},function(e,t,i){const s=i(0),r=i(3);e.exports=class extends r{constructor(e,t,i){super(s.mover,e,t,i),this.org.is_mover=!0}}},function(e,t,i){const s=i(0),r=i(3),o=i(1);e.exports=class extends r{constructor(e,t,i){super(s.killer,e,t,i)}performFunction(){var e=this.org.env,t=this.getRealCol(),i=this.getRealRow();for(var s of o.killableNeighbors){var r=e.grid_map.cellAt(t+s[0],i+s[1]);this.killNeighbor(r)}}killNeighbor(e){if(null!=e&&null!=e.owner&&e.owner!=this.org&&e.owner.living&&e.state!=s.armor){var t=e.state==s.killer;e.owner.harm(),o.instaKill&&t&&this.org.harm()}}}},function(e,t,i){const s=i(0),r=i(3);e.exports=class extends r{constructor(e,t,i){super(s.armor,e,t,i)}}},function(e,t,i){const s=i(0),r=i(3),o=i(1),n=i(2),l=i(22);e.exports=class extends r{constructor(e,t,i){super(s.eye,e,t,i),this.org.has_eyes=!0}initInherit(e){super.initInherit(e),this.direction=e.direction}initRandom(){this.direction=n.getRandomDirection()}initDefault(){this.direction=n.up}getAbsoluteDirection(){var e=this.org.rotation+this.direction;return e>3&&(e-=4),e}performFunction(){var e=this.look();this.org.brain.observe(e)}look(){var e=this.org.env,t=this.getAbsoluteDirection(),i=0,r=0;switch(t){case n.up:r=-1;break;case n.down:r=1;break;case n.right:i=1;break;case n.left:i=-1}for(var a=this.getRealCol(),h=this.getRealRow(),c=a,d=h,u=null,g=0;g<o.lookRange&&(c+=i,d+=r,null!=(u=e.grid_map.cellAt(c,d)));g++)if(u.state!=s.empty){var m=Math.abs(a-c)+Math.abs(h-d);return new l(u,m,t)}return new l(u,o.lookRange,t)}}},function(e,t){e.exports=class{constructor(e,t,i){this.cell=e,this.distance=t,this.direction=i}}},function(e,t,i){const s=i(1),r=i(2),o=i(0),n=0,l=1,a=2,h=function(){return Math.floor(3*Math.random())};e.exports=class{constructor(e){this.owner=e,this.observations=[],this.decisions=[],this.decisions[o.empty.name]=n,this.decisions[o.food.name]=a,this.decisions[o.wall.name]=n,this.decisions[o.mouth.name]=n,this.decisions[o.producer.name]=n,this.decisions[o.mover.name]=n,this.decisions[o.killer.name]=l,this.decisions[o.armor.name]=n,this.decisions[o.eye.name]=n}randomizeDecisions(){this.decisions[o.mouth.name]=h(),this.decisions[o.producer.name]=h(),this.decisions[o.mover.name]=h(),this.decisions[o.armor.name]=h(),this.decisions[o.eye.name]=h()}observe(e){this.observations.push(e)}decide(){var e=n,t=s.lookRange+1,i=0;for(var o of this.observations)null!=o.cell&&o.cell.owner!=this.owner&&o.distance<t&&(e=this.decisions[o.cell.state.name],i=o.direction,t=o.distance);return this.observations=[],e==a?(this.owner.changeDirection(i),!0):e==l&&(this.owner.changeDirection(r.getOppositeDirection(i)),!0)}mutate(){this.decisions[o.getRandomName()]=h(),this.decisions[o.empty.name]=n}}},function(e,t,i){const s=i(11),r=i(5),o=i(6),n=i(0),l=i(4);i(10);e.exports=class extends s{constructor(e,t){super(e,t),this.mode=o.Drag,this.org_to_clone=null,this.defineZoomControls(),this.scale=1}defineZoomControls(){var e=1;const t=document.querySelector("#env-canvas");t.onwheel=function(i){i.preventDefault();var s=-1*Math.sign(i.deltaY);e=Math.max(.5,e+.5*s),t.style.transform=`scale(${e})`,this.scale=e}.bind(this)}resetView(){$("#env-canvas").css("transform","scale(1)"),$("#env-canvas").css("top","0px"),$("#env-canvas").css("left","0px"),this.scale=1}updateMouseLocation(e,t){super.updateMouseLocation(e,t)}mouseMove(){this.performModeAction()}mouseDown(){this.start_x=this.mouse_x,this.start_y=this.mouse_y,this.performModeAction()}mouseUp(){}performModeAction(){var e=this.mode,t=this.right_click,i=this.left_click;if(e!=o.None&&(t||i)){var s=this.cur_cell;if(null==s)return;switch(e){case o.FoodDrop:i?this.dropCellType(s.col,s.row,n.food,!1):t&&this.dropCellType(s.col,s.row,n.empty,!1);break;case o.WallDrop:i?this.dropCellType(s.col,s.row,n.wall,!0):t&&this.dropCellType(s.col,s.row,n.empty,!1);break;case o.ClickKill:this.killNearOrganisms();break;case o.Select:null==this.cur_org&&(this.cur_org=this.findNearOrganism()),null!=this.cur_org&&this.control_panel.setEditorOrganism(this.cur_org);break;case o.Clone:if(null!=this.org_to_clone){var l=new r(this.mouse_c,this.mouse_r,this.env,this.org_to_clone);l.isClear(this.mouse_c,this.mouse_r)&&this.env.addOrganism(l)}break;case o.Drag:var a=parseInt($("#env-canvas").css("top"),10),h=parseInt($("#env-canvas").css("left"),10),c=a+(this.mouse_y-this.start_y)*this.scale,d=h+(this.mouse_x-this.start_x)*this.scale;$("#env-canvas").css("top",c+"px"),$("#env-canvas").css("left",d+"px")}}}dropCellType(e,t,i,s=!1){for(var r of l.allSelf){var o=e+r[0],n=t+r[1],a=this.env.grid_map.cellAt(o,n);if(null!=a){if(s&&null!=a.owner)a.owner.die();else if(null!=a.owner)continue;this.env.changeCell(o,n,i,null)}}}findNearOrganism(){for(var e of l.all){var t=this.cur_cell.col+e[0],i=this.cur_cell.row+e[1],s=this.env.grid_map.cellAt(t,i);if(null!=s&&null!=s.owner)return s.owner}return null}killNearOrganisms(){for(var e of l.allSelf){var t=this.cur_cell.col+e[0],i=this.cur_cell.row+e[1],s=this.env.grid_map.cellAt(t,i);null!=s&&null!=s.owner&&s.owner.die()}}}},function(e,t,i){const s=i(1),r=i(6);e.exports=class{constructor(e){this.engine=e,this.defineMinMaxControls(),this.defineEngineSpeedControls(),this.defineGridSizeControls(),this.defineTabNavigation(),this.defineHyperparameterControls(),this.defineModeControls(),this.defineChallenges(),this.fps=e.fps,this.organism_record=0,this.env_controller=this.engine.env.controller,this.editor_controller=this.engine.organism_editor.controller,this.env_controller.setControlPanel(this),this.editor_controller.setControlPanel(this)}defineMinMaxControls(){$("#minimize").click((function(){$(".control-panel").css("display","none"),$(".hot-controls").css("display","block")})),$("#maximize").click((function(){$(".control-panel").css("display","grid"),$(".hot-controls").css("display","none")}))}defineEngineSpeedControls(){this.slider=document.getElementById("slider"),this.slider.oninput=function(){this.fps=this.slider.value,this.engine.running&&this.changeEngineSpeed(this.fps),$("#fps").text("Target FPS: "+this.fps)}.bind(this),$(".pause-button").click(function(){$(".pause-button").find("i").toggleClass("fa fa-pause"),$(".pause-button").find("i").toggleClass("fa fa-play"),this.engine.running?this.engine.stop():this.engine.running||this.engine.start(this.fps)}.bind(this))}defineGridSizeControls(){$("#fill-window").change((function(){this.checked?$(".col-row-input").css("display","none"):$(".col-row-input").css("display","block")})),$("#resize").click(function(){var e=$("#cell-size").val();if($("#fill-window").is(":checked"))this.engine.env.resizeFillWindow(e);else{var t=$("#col-input").val(),i=$("#row-input").val();this.engine.env.resizeGridColRow(e,t,i)}}.bind(this))}defineTabNavigation(){var e=this;$(".tabnav-item").click((function(){$(".tab").css("display","none");var t="#"+this.id+".tab";e.engine.organism_editor.is_active="editor"==this.id,$(t).css("display","grid")}))}defineHyperparameterControls(){$("#food-prod-prob").change(function(){s.foodProdProb=$("#food-prod-prob").val()}.bind(this)),$("#lifespan-multiplier").change(function(){s.lifespanMultiplier=$("#lifespan-multiplier").val()}.bind(this)),$("#mover-rot").change((function(){s.moversCanRotate=this.checked})),$("#offspring-rot").change((function(){s.offspringRotate=this.checked})),$("#insta-kill").change((function(){s.instaKill=this.checked})),$("#look-range").change((function(){s.lookRange=$("#look-range").val()})),$("#evolved-mutation").change((function(){this.checked?($(".global-mutation-in").css("display","none"),$("#avg-mut").css("display","block")):($(".global-mutation-in").css("display","block"),$("#avg-mut").css("display","none")),s.useGlobalMutability=!this.checked})),$("#global-mutation").change((function(){s.globalMutability=$("#global-mutation").val()})),$(".mut-prob").change((function(){switch(this.id){case"add-prob":s.addProb=this.value,s.balanceMutationProbs(1);break;case"change-prob":s.changeProb=this.value,s.balanceMutationProbs(2);break;case"remove-prob":s.removeProb=this.value,s.balanceMutationProbs(3)}$("#add-prob").val(Math.floor(s.addProb)),$("#change-prob").val(Math.floor(s.changeProb)),$("#remove-prob").val(Math.floor(s.removeProb))})),$("#movers-produce").change((function(){s.moversCanProduce=this.checked})),$("#food-blocks").change((function(){s.foodBlocksReproduction=this.checked})),$("#reset-rules").click((function(){s.setDefaults(),$("#food-prod-prob").val(s.foodProdProb),$("#lifespan-multiplier").val(s.lifespanMultiplier),$("#mover-rot").prop("checked",s.moversCanRotate),$("#offspring-rot").prop("checked",s.offspringRotate),$("#insta-kill").prop("checked",s.instaKill),$("#evolved-mutation").prop("checked",!s.useGlobalMutability),$("#add-prob").val(s.addProb),$("#change-prob").val(s.changeProb),$("#remove-prob").val(s.removeProb),$("#movers-produce").prop("checked",s.moversCanProduce),$("#food-blocks").prop("checked",s.foodBlocksReproduction),s.useGlobalMutability?($(".global-mutation-in").css("display","block"),$("#avg-mut").css("display","none")):($(".global-mutation-in").css("display","none"),$("#avg-mut").css("display","block"))}))}defineModeControls(){var e=this;$(".edit-mode-btn").click((function(){switch($("#cell-selections").css("display","none"),$("#organism-options").css("display","none"),e.editor_controller.setDetailsPanel(),this.id){case"food-drop":e.setMode(r.FoodDrop);break;case"wall-drop":e.setMode(r.WallDrop);break;case"click-kill":e.setMode(r.ClickKill);break;case"select":e.setMode(r.Select);break;case"edit":e.setMode(r.Edit),e.editor_controller.setEditorPanel();break;case"drop-org":e.setMode(r.Clone),e.env_controller.org_to_clone=e.engine.organism_editor.getCopyOfOrg();break;case"drag-view":e.setMode(r.Drag)}$(".edit-mode-btn").css("background-color","#9099c2"),$("#"+this.id).css("background-color","#81d2c7")})),$(".reset-view").click(function(){this.env_controller.resetView()}.bind(this));var t=this.engine.env;$("#reset-env").click(function(){this.engine.env.reset()}.bind(this)),$("#auto-reset").change((function(){t.auto_reset=this.checked})),$("#clear-walls").click(function(){confirm("Are you sure you want to clear all the walls?")&&this.engine.env.clearWalls()}.bind(this)),$("#clear-editor").click(function(){this.engine.organism_editor.clear(),this.editor_controller.setEditorPanel()}.bind(this))}defineChallenges(){$(".challenge-btn").click((function(){$("#challenge-title").text($(this).text()),$("#challenge-description").text($(this).val())}))}setMode(e){this.env_controller.mode=e,this.editor_controller.mode=e}setEditorOrganism(e){this.engine.organism_editor.setOrganismToCopyOf(e),this.editor_controller.clearDetailsPanel(),this.editor_controller.setDetailsPanel()}changeEngineSpeed(e){this.engine.stop(),this.engine.start(e),this.fps=this.engine.fps}update(){$("#fps-actual").text("Actual FPS: "+Math.floor(this.engine.actual_fps));var e=this.engine.env.organisms.length;$("#org-count").text("Organism count:  "+e),e>this.organism_record&&(this.organism_record=e),$("#org-record").text("Highest count: "+this.organism_record),$("#avg-mut").text("Average Mutation Rate: "+Math.round(100*this.engine.env.averageMutability())/100),$("#largest-org").text("Largest Organism: "+this.engine.env.largest_cell_count+" cells"),$("#reset-count").text("Auto reset count: "+this.engine.env.reset_count)}}},function(e,t,i){const s=i(7),r=i(5),o=i(9),n=i(8),l=i(0),a=i(27);i(2);e.exports=class extends s{constructor(){super(),this.is_active=!0;this.renderer=new n("editor-canvas","editor-env",13),this.controller=new a(this,this.renderer.canvas),this.grid_map=new o(15,15,13),this.clear()}update(){this.is_active&&this.renderer.renderHighlights()}changeCell(e,t,i,s){super.changeCell(e,t,i,s),this.renderFull()}renderFull(){this.renderer.renderFullGrid(this.grid_map.grid)}addCellToOrg(e,t,i){var s=this.grid_map.getCenter(),r=e-s[0],o=t-s[1],n=this.organism.getLocalCell(r,o);if(null!=n){var l=this.organism.replaceCell(i,n.loc_col,n.loc_row,!1);this.changeCell(e,t,i,l)}else this.organism.canAddCellAt(r,o)&&this.changeCell(e,t,i,this.organism.addDefaultCell(i,r,o))}removeCellFromOrg(e,t){var i=this.grid_map.getCenter(),s=e-i[0],r=t-i[1];0!=s||0!=r?null!=this.organism.getLocalCell(s,r)&&this.organism.removeCell(s,r)&&this.changeCell(e,t,l.empty,null):alert("Cannot remove center cell")}setOrganismToCopyOf(e){this.grid_map.fillGrid(l.empty);var t=this.grid_map.getCenter();this.organism=new r(t[0],t[1],this,e),this.organism.updateGrid(),this.controller.updateDetails()}getCopyOfOrg(){return new r(0,0,null,this.organism)}clear(){this.grid_map.fillGrid(l.empty);var e=this.grid_map.getCenter();this.organism=new r(e[0],e[1],this,null),this.organism.addDefaultCell(l.mouth,0,0),this.organism.updateGrid()}}},function(e,t,i){const s=i(11),r=i(6),o=i(0),n=i(2),l=i(1);e.exports=class extends s{constructor(e,t){super(e,t),this.mode=r.None,this.edit_cell_type=null,this.highlight_org=!1,this.defineCellTypeSelection(),this.defineEditorDetails()}mouseMove(){(this.right_click||this.left_click)&&this.editOrganism()}mouseDown(){this.editOrganism()}mouseUp(){}getCurLocalCell(){return this.env.organism.getLocalCell(this.mouse_c-this.env.organism.c,this.mouse_r-this.env.organism.r)}editOrganism(){if(null!=this.edit_cell_type&&this.mode==r.Edit){if(this.left_click)if(this.edit_cell_type==o.eye&&this.cur_cell.state==o.eye){var e=this.getCurLocalCell();e.direction=n.rotateRight(e.direction),this.env.renderFull()}else this.env.addCellToOrg(this.mouse_c,this.mouse_r,this.edit_cell_type);this.right_click&&this.env.removeCellFromOrg(this.mouse_c,this.mouse_r),this.setBrainPanelVisibility(),this.setMoveRangeVisibility(),this.updateDetails()}}updateDetails(){$(".cell-count").text("Cell count: "+this.env.organism.cells.length)}defineCellTypeSelection(){var e=this;$(".cell-type").click((function(){switch(this.id){case"mouth":e.edit_cell_type=o.mouth;break;case"producer":e.edit_cell_type=o.producer;break;case"mover":e.edit_cell_type=o.mover;break;case"killer":e.edit_cell_type=o.killer;break;case"armor":e.edit_cell_type=o.armor;break;case"eye":e.edit_cell_type=o.eye}$(".cell-type").css("border-color","black");var t="#"+this.id+".cell-type";$(t).css("border-color","yellow")}))}defineEditorDetails(){this.details_html=$("#organism-details"),this.edit_details_html=$("#edit-organism-details"),this.decision_names=["ignore","move away","move towards"],$("#move-range-edit").change(function(){this.env.organism.move_range=parseInt($("#move-range-edit").val())}.bind(this)),$("#observation-type-edit").change(function(){this.setBrainEditorValues($("#observation-type-edit").val()),this.setBrainDetails()}.bind(this)),$("#reaction-edit").change(function(){var e=$("#observation-type-edit").val(),t=parseInt($("#reaction-edit").val());this.env.organism.brain.decisions[e]=t,this.setBrainDetails()}.bind(this))}clearDetailsPanel(){$("#organism-details").css("display","none"),$("#edit-organism-details").css("display","none")}setDetailsPanel(){this.clearDetailsPanel();var e=this.env.organism;$(".cell-count").text("Cell count: "+e.cells.length),$("#move-range").text("Move Range: "+e.move_range),$("#mutation-rate").text("Mutation Rate: "+e.mutability),l.useGlobalMutability?$("#mutation-rate").css("display","none"):$("#mutation-rate").css("display","block"),this.setMoveRangeVisibility(),this.setBrainPanelVisibility()&&this.setBrainDetails(),$("#organism-details").css("display","block")}setEditorPanel(){this.clearDetailsPanel();var e=this.env.organism;$(".cell-count").text("Cell count: "+e.cells.length),this.setMoveRangeVisibility()&&$("#move-range-edit").val(e.move_range),this.setBrainPanelVisibility()&&this.setBrainEditorValues($("#observation-type-edit").val()),$("#cell-selections").css("display","grid"),$("#edit-organism-details").css("display","block")}setBrainPanelVisibility(){var e=this.env.organism;return e.has_eyes&&e.is_mover?($(".brain-details").css("display","block"),!0):($(".brain-details").css("display","none"),!1)}setBrainDetails(){var e=[],t=[];for(var i in this.env.organism.brain.decisions){var s=this.env.organism.brain.decisions[i];1==s?t.push(i):2==s&&e.push(i)}$(".chase-types").text("Move Towards: "+e),$(".retreat-types").text("Move Away From: "+t)}setMoveRangeVisibility(){return this.env.organism.is_mover?($("#move-range-cont").css("display","block"),$("#move-range").css("display","block"),!0):($("#move-range-cont").css("display","none"),$("#move-range").css("display","none"),!1)}setBrainEditorValues(e){$("#observation-type-edit").val(e);var t=this.env.organism.brain.decisions[e];$("#reaction-edit").val(t)}}},function(e,t,i){const s=i(0);var r={empty:"#0E1318",food:"#2F7AB7",wall:"gray",mouth:"#DEB14D",producer:"#15DE59",mover:"#60D4FF",killer:"#F82380",armor:"#7230DB",eye:"#B6C1EA","eye-slit":"#0E1318"};e.exports=class{constructor(e,t){this.world_env=e,this.editor_env=t}loadColorScheme(){for(var e of s.all)e.color=r[e.name];for(var t in s.eye.slit_color=r["eye-slit"],r)$("#"+t+".cell-type ").css("background-color",r[t]),$("#"+t+".cell-legend-type").css("background-color",r[t]);this.world_env.renderer.renderFullGrid(this.world_env.grid_map.grid),this.editor_env.renderer.renderFullGrid(this.editor_env.grid_map.grid)}}}]);