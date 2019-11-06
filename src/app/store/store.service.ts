import {Injectable} from "@angular/core";

@Injectable({
		providedIn: 'root'
	}
)
export abstract class StoreService<T> {
	protected data: T;

	getData(): T {
		return this.data;
	}

	setData(data: T): void {
		this.data = data;
	}
}
