import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

import { AngularStudioAuthenticationService } from './service';
import { TestBed } from '@angular/core/testing';
import { AngularStudioAuthenticationModule } from './module';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { SessionId } from './session-id';
import { validate as uuidValidate } from 'uuid';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

/**
 * Authentication service end-to-end test suite.
 */
describe('Authentication Service e2e', () => {

    /**
     * Authentication service reference.
     * This valid is assigned in the beforeEach() method calls.
     */
    let service: AngularStudioAuthenticationService<SessionId>;

    /**
     * Run before each unit.
     */
    beforeEach(() => {

        TestBed.configureTestingModule({

            imports: [

                AngularStudioAuthenticationModule.forRoot({

                    baseUrl: 'http://localhost:18081',
                    path: '/rbac/users/login',
                    check: true,
                    name: 'someToken'

                })

            ]

        }).compileComponents();

        service = TestBed.inject<AngularStudioAuthenticationService<any>>(AngularStudioAuthenticationService);

    });

    /**
     * Given passing invalid credentials the api response should return
     * an unauthorized 401 status code.
     */
    test('should be 401 unauthorized', (done) => {

        expect.assertions(1);

        service.login('fail@failure.com', 'failureisnotanoption').subscribe(response => {

            expect(response).toMatchObject({ status: 401 });

            done();

        });

    });

    /**
     * Given the correct login credentials we should receive a valid http
     * response along with an id value.
     */
    test('should be 200 authorized', (done) => {

        expect.assertions(2);

        service.login('test@test.com', 'Agby5kma0130').subscribe(response => {

            expect(response).toMatchObject({ status: 200 });
            expect(uuidValidate(response.body.id)).toBeTruthy();

            done();

        });

    });

    /**
     * Given the previous test we are logged in so we should
     * be able to log out and verify the lack of a valid session.
     */
    test('should be automatically logged out', (done) => {

        expect.assertions(2);

        expect(service.isLoggedIn()).toBeTruthy();

        //
        // Request a logout.
        //
        service.logout();

        //
        // Simulate a delay..
        //
        setTimeout(() => {

            expect(service.isLoggedIn()).toBeFalsy();

            done();

        }, 3000);

    }, 15000);

});
