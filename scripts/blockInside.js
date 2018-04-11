function enumNodes(node) {
	var tagName = "";
    while (node) {
        if (1 == node.nodeType && node.tagName != 'SCRIPT' && node.tagName != 'BODY') {
		
			// Определяем имя класса компонента
			tagName = node.tagName;
			tagName = tagName.charAt(0).toUpperCase() + tagName.substr(1).toLowerCase();
			
			// Получаем внутреннее содержимое блока
			var outHTML = node.innerHTML.replace(/>\s*/g,">");
			outHTML = outHTML.replace(/\s*</g,"<");
			
			// Создаем объект класса компонента, и делаем его дочерним по отношению к DOM тегу компонента
			eval("var component; try {component = new " +tagName+ "(\'"+ outHTML +"\')} catch(err) {console.log( component = new Component(\'"+ outHTML +"\'))}");				
			
			// Рендерим компоненты
			node.innerHTML = component.render();
        };

        enumNodes(node.firstChild);
        node = node.nextSibling;
    };
};
 
enumNodes(document.body);