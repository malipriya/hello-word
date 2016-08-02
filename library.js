// JavaScript Document
function Library()
{
	this.shelfs = [];
	this.addShelf = function(oneNewShelf)
	{
		this.shelfs.push(oneNewShelf);
	}
	this.getShelf = function(shelfNo)
	{
		for(var i = 0; i < this.shelfs.length; i++)
		{
			if(this.shelfs[i].no == shelfNo)
			{
				return this.shelfs[i];
			}
		}
	}
}