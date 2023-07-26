import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver()
export class RestaurantsResolver {
    @Query((returns) => [Restaurant]) // GraphQL type
    restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        return []
    }

    @Mutation((returns) => Boolean)
    createRestaurant(
        @Args() createRestaurantInput: CreateRestaurantDto
    ): boolean {
        console.log(createRestaurantInput);
        return true;
    }
}