class LinkedList{
	
	constructor(){
		this.head = null;
		this._length = 0;
	}
	
	get length(){return this._length;}
	
	insert(val){
		let node = new LinkedListNode(val);
		let current;
        if(this.head === null) this.head = node;
		else{
            current = this.head;
            while(current.next != null) current = current.next;
            current.next = node;  
        }
		this._length++;
	}
	
	insertAt(index, val){
		if(index >= this._length) return this.insert(val);
		
		let node = new LinkedListNode(val)
			,current = this.head
			,i = 0
			,temp;
		
		if(index === 0){
			node.next = current;
			this.head = node;
		}
		else{
			while(current.next != null){
				if(i === index - 1){
					temp = current.next;
					current.next = node;
					node.next = temp;
				}
				current = current.next;
				i++;
			}
		}
		this._length++;
	}
	
	remove(val){
		let temp;
        if(this.head === null) throw new Error('List is empty, nothing to remove');
		else if(this.head.value === val){this.head = this.head.next; this._length--;}
		else{
            let current = this.head;
            while(current !== null){
                if (current.next.value === val){
                    temp = current.next.next;
                    current.next = temp;
					this._length--;
                    return;
                }
                current = current.next;
            }
        }
	}
	
	removeAt(index){
        if(this.head === null) throw new Error('List is empty, nothing to remove');
		else if(index > this.length) throw new Error('Index out of bounds. Index cannot be greater than length of LinkedList');
		else if(index === 0) this.head = this.head.next;
		else{
			let current = this.head;
			for(let i = 0; i < index - 1; i++) current = current.next;
			if(current.next !== null) current.next = current.next.next;
        }
		this._length--;
	}
	
	reverse(){
		let prev = null, current = this.head, next;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
		this.head = prev;
	}
	
	toArray(){
		let arr = [], current = this.head;
		while(current !== null){
			arr.push(current.value);
			current = current.next;
		}
		return arr;
	}
	
	showAllElements(){
		if(this.head !== null){
			let current = this.head, i = 0;
			while(current !== null){
				console.log('Position: ' + i + '  Value: ' + current.value);
				current = current.next;
				i++;
			}
		}
	}
	
}

class LinkedListNode{
	constructor(val){
		this._value = val;
		this._next = null;
	}
	
	get value(){return this._value;}
	set value(val){this._value = val;}
	
	get next(){return this._next;}
	set next(node){this._next = node;}
}