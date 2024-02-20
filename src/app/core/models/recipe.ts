export interface RecipeIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}

export interface AnalyzedInstructionStep {
  number: number;
  step: string;
  ingredients: RecipeIngredient[];
  equipment: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
  length?: {
    number: number;
    unit: string;
  };
}

export interface Recipe {
  favorite? :boolean
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: RecipeIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions?: any;
  analyzedInstructions: {
    name: string;
    steps: AnalyzedInstructionStep[];
  }[];
  originalId: number | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export interface RecipeSearchResponse {
  results: SearchRecipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface SearchRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
