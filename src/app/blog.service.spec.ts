import { TestBed, inject } from '@angular/core/testing';

import { BlogService, Sitemap } from './blog.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BlogService', () => {
  let blogService:BlogService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));

  describe('loadSitemap',()=>{
    it('should return an Observable<Object>',inject([BlogService,HttpTestingController],
              (blogService:BlogService, backend:HttpTestingController)=>{
                blogService.loadSiteMap().subscribe((siteMap:Sitemap)=>{
                  expect(siteMap.featured).toBe("test.md");
                });
                backend.expectOne("sitemap.json").flush({featured:"test.md"});

      })
   )});

});
