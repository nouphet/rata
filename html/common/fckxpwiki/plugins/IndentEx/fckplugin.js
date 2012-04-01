﻿//
//	guiedit - PukiWiki Plugin
//
//	License:
//	  GNU General Public License Version 2 or later (GPL)
//	  http://www.gnu.org/licenses/gpl.html
//
//	Copyright (C) 2006-2007 garand
//	PukiWiki : Copyright (C) 2001-2006 PukiWiki Developers Team
//	FCKeditor : Copyright (C) 2003-2007 Frederico Caldeira Knabben
//


FCKCommands.GetCommand('Indent').GetState = function() {
	// Disabled if not WYSIWYG.
	if ( FCK.EditMode != FCK_EDITMODE_WYSIWYG || ! FCK.EditorWindow )
		return FCK_TRISTATE_DISABLED ;

	var tags = new Array('ol', 'ul');
	for (i = 0; i < tags.length; i++) {
		if (FCKSelection.HasAncestorNode(tags[i])) {
			this.temp = FCKIndentCommand.prototype.GetState;
			return this.temp();
		}
	}

	return FCK_TRISTATE_DISABLED;
}

FCKCommands.GetCommand('Outdent').GetState = function() {
	// Disabled if not WYSIWYG.
	if ( FCK.EditMode != FCK_EDITMODE_WYSIWYG || ! FCK.EditorWindow )
		return FCK_TRISTATE_DISABLED ;

	var tags = new Array('ol', 'ul');
	for (i = 0; i < tags.length; i++) {
		if (FCKSelection.HasAncestorNode(tags[i])) {
			this.temp = FCKIndentCommand.prototype.GetState;
			return this.temp();
		}
	}

	return FCK_TRISTATE_DISABLED;
}