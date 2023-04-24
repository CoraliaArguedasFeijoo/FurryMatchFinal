import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PetComponent } from '../list/pet.component';
import { PetDetailComponent } from '../detail/pet-detail.component';
import { PetUpdateComponent } from '../update/pet-update.component';
import { PetRoutingResolveService } from './pet-routing-resolve.service';
import { SearchMatchComponent } from '../search-match/search-match.component';
import { ASC } from 'app/config/navigation.constants';

const petRoute: Routes = [
  {
    path: '',
    component: PetComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PetDetailComponent,
    resolve: {
      pet: PetRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PetUpdateComponent,
    resolve: {
      pet: PetRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PetUpdateComponent,
    resolve: {
      pet: PetRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'search',
    component: SearchMatchComponent,
    resolve: {
      pet: PetRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(petRoute)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
