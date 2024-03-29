SyntaxHighlighter.brushes.ROBLOXLua = function() {
	var keywords = 'and break do else elseif end for function if in local nil not or repeat return then until while';
	var globals = 'workspace game script plugin _VERSION self _G';

	this.regexList = [
		{
			regex: SyntaxHighlighter.regexLib.doubleQuotedString,
			css: 'string'
		},
		{
			regex: SyntaxHighlighter.regexLib.singleQuotedString,
			css: 'string'
		},
		{
			regex: /\[(=*)\[[\w\W]*?\]\1\]/gm,
			css: 'string'
		},
		{
			regex: new RegExp(this.getKeywords(keywords), 'gm'),
			css: 'keyword'
		},
		{
			regex: new RegExp(this.getKeywords(globals), 'gm'),
			css: 'constants'
		},
		{
			regex: /(0x[\dA-Fa-f]+)|(-?\d*\.?\d+e-?\d+)|(-?\d*\.?\d+)/g,
			css: 'value'
		},
		{
			regex: /true|false/g,
			css: 'value'
		},
		{
			// Partially sourced from https://github.com/MemoryPenguin/RBXLua-SublimeText
			regex: /\b(print|warn|error|assert|collectgarbage|dofile|gcinfo|getfenv|getmetatable|ipairs|load|loadfile|spawn|loadstring|newproxy|next|pairs|[xy]?pcall|rawequal|rawget|rawset|select|setfenv|setmetatable|stats|tonumber|type|unpack|delay|elapsedTime|LoadLibrary|require|spawn|tick|time|UserSettings|[Vv]ersion|wait|DebuggerManager|math\.(?:abs|acos|asin|atan2?|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|noise|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|coroutine\.(?:create|resume|running|status|wrap|yield)|string\.(?:byte|char|dump|find|format|len|lower|match|rep|reverse|sub|upper|gmatch|gsub)|table\.(?:concat|insert|remove|sort|foreach|foreachi|getn|maxn|setn)|Vector3\.(?:new|FromAxis|FromNormalId)|CFrame\.(?:new|Angles|fromAxisAngle|fromEulerAnglesXYZ)|Axes\.new|BrickColor\.(?:new|palette|random|White|Gray|DarkGray|Black|Red|Yellow|Green|Blue)|Color3\.(?:new|fromRGB|fromHSV|toHSV)|ColorSequence\.new|ColorSequenceKeypoint\.new|Faces\.new|Instance\.new|NumberRange\.new|NumberSequence\.new|NumberSequenceKeypoint\.new|PhysicalProperties\.new|Ray\.new|Rect\.new|Region3\.new|Region3int16\.new|UDim\.new|UDim2\.new|Vector2\.new|Vector3int16\.new|debug\.(traceback|profilebegin|profileend)|os\.(?:time|difftime))\b/gm,
			css: 'functions'
		},
		{
			regex: /--.*$/gm,
			css: 'comments'
		},
		{
			regex: /--\[\[[\w\W]*?\]\]/gm,
			css: 'comments'
		}
	];
};

SyntaxHighlighter.brushes.ROBLOXLua.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.ROBLOXLua.aliases = [ 'rbxs', 'rbxl' ];