export type Meal = {
    id: string;
    meal: string;
    category: string;
    area: string;
    instructions: string;
    img: string;
    price: number;
  };
  
  
  export type User = {
    username: string;
    password: string;
  };
  
  export type ProtectedRouteProps = {
    children: React.ReactNode;
  };
  
  export type MenuItemProps = {
    item: Meal;
  };
  
  export type FetchStatus = number | "error" | null;
  export type UseFetchResult<T> = {
    data: T | null;
    status: FetchStatus;
  };
  
  export type TooltipProps = {
    tooltipText: string;
    children: React.ReactNode;
  };
  
  export type FooterColumn = {
    title: string;
    items: string[];
  };  

export interface OrderItem {
  mealId: string;
  count: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: string;
  items: OrderItem[];
  totalPrice: number;
  deliveryAddress?: string;
  address?: { street?: string };
}


  