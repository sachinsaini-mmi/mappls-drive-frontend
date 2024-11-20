import { TestBed } from '@angular/core/testing';
import { AppConstants } from './app.constants';
import moment from 'moment';

describe('AppConstants Service', () => {

  let service: AppConstants;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConstants);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test for static SECRETKEY and SECRETID
  it('should return the correct SECRETKEY', () => {
    expect(AppConstants.getSecretKey).toBe('TP9S6dZTjIpV7AbBVvOF1juSXtaMvaPQ');
  });

  it('should return the correct SECRETID', () => {
    expect(AppConstants.getSecretId).toBe('X7eR4tU9oP2iL6kF3gWs');
  });

  // Test for static RouteURLs
  it('should contain correct RouteURLs', () => {
    expect(AppConstants.RouteURLs.INIT).toBe('');
    expect(AppConstants.RouteURLs.HOME).toBe('/home');
    expect(AppConstants.RouteURLs.ORGANISATION).toBe('/home/organization');
    expect(AppConstants.RouteURLs.APPLICATION).toBe('/home/application');
    expect(AppConstants.RouteURLs.RESOURCES).toBe('/home/resources');
    expect(AppConstants.RouteURLs.ASSETS).toBe('/home/assets');
    expect(AppConstants.RouteURLs.REPORTS).toBe('/home/reports');
    expect(AppConstants.RouteURLs.PLANS).toBe('/home/plans');
    expect(AppConstants.RouteURLs.PROFILE).toBe('/home/profile');
  });

  // Test for popUpTimeout
  it('should have correct popUpTimeout value', () => {
    expect(service.popUpTimeout).toBe(1500);
  });

  // Test for CalenderRanges
  it('should have correct CalendarRanges', () => {
    const today = moment();
    const yesterday = moment().subtract(1, 'days');
    const last7DaysStart = moment().subtract(6, 'days');
    const last30DaysStart = moment().subtract(29, 'days');
    const thisMonthStart = moment().startOf('month');
    const lastMonthStart = moment().subtract(1, 'month').startOf('month');
    const lastMonthEnd = moment().subtract(1, 'month').endOf('month');

    expect(service.CalenderRanges.Today[0].isSame(today, 'day')).toBeTrue();
    expect(service.CalenderRanges.Today[1].isSame(today, 'day')).toBeTrue();
    expect(service.CalenderRanges.Yesterday[0].isSame(yesterday, 'day')).toBeTrue();
    expect(service.CalenderRanges.Yesterday[1].isSame(yesterday, 'day')).toBeTrue();
    expect(service.CalenderRanges['Last 7 Days'][0].isSame(last7DaysStart, 'day')).toBeTrue();
    expect(service.CalenderRanges['Last 30 Days'][0].isSame(last30DaysStart, 'day')).toBeTrue();
    expect(service.CalenderRanges['This Month'][0].isSame(thisMonthStart, 'day')).toBeTrue();
    expect(service.CalenderRanges['Last Month'][0].isSame(lastMonthStart, 'day')).toBeTrue();
    expect(service.CalenderRanges['Last Month'][1].isSame(lastMonthEnd, 'day')).toBeTrue();
  });

  // Test for chartColors
  it('should have correct chart colors', () => {
    expect(service.chartColors.length).toBe(6);
    expect(service.chartColors[0].id).toBe('color1');
    expect(service.chartColors[0].color).toBe('#EBCE9C');
    expect(service.chartColors[1].id).toBe('color2');
    expect(service.chartColors[1].color).toBe('#81D0C7');
    expect(service.chartColors[2].id).toBe('color3');
    expect(service.chartColors[2].color).toBe('#F0D879');
    expect(service.chartColors[3].id).toBe('color4');
    expect(service.chartColors[3].color).toBe('#8DB2EE');
    expect(service.chartColors[4].id).toBe('color5');
    expect(service.chartColors[4].color).toBe('#9FA0EC');
    expect(service.chartColors[5].id).toBe('color6');
    expect(service.chartColors[5].color).toBe('#E99CC2');
  });

});
