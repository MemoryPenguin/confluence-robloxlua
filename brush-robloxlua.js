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
			regex: /(0x\d+\.*\d*)|(\d*\.?\d+e\d+)|(\d*\.?\d+)/g,
			css: 'value'
		},
		{
			regex: /true|false/g,
			css: 'value'
		},
		{
			// Sourced from https://github.com/MemoryPenguin/RBXLua-SublimeText
			regex: /\b(print|warn|error|assert|collectgarbage|dofile|getfenv|getmetatable|ipairs|load|loadfile|spawn|loadstring|newproxy|next|pairs|[xy]?pcall|rawequal|rawget|rawset|select|setfenv|setmetatable|tonumber|type|unpack|delay|elapsedTime|LoadLibrary|require|spawn|tick|time|UserSettings|Version|wait|DebuggerManager|math\.(?:abs|acos|asin|atan2?|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|noise|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|coroutine\.(?:create|resume|running|status|wrap|yield)|string\.(?:byte|char|dump|find|format|len|lower|match|rep|reverse|sub|upper|gmatch|gsub)|table\.(?:concat|insert|remove|sort))\b/gm,
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