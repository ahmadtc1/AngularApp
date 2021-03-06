import { Component, OnInit } from '@angular/core';
import { IProduct }  from './product';
import { ProductService } from './product.service'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin:number = 2;
    showImage: boolean = false;
    showPrice: boolean = false;
    _listFilter: string;
    errorMessage:string;

    get listFilter(): string {
        return this._listFilter
    } 

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter): this.products
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
        this.filteredProducts = this.products;
        this.listFilter = ''
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    togglePrice(): void {
        this.showPrice = !this.showPrice;
    } 
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    onProductClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;        
            },
            error => this.errorMessage = <any> error
        );   
    }
}