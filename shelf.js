// JavaScript Document
function Shelf(sName,sNumber,sCapacity)
{
	this.name = sName;
	this.no = sNumber;
	this.cap = sCapacity;
	
	this.books = [];
	this.addBook = function(oneNewBook)
	{
		this.books.push(oneNewBook);
	}	
}
