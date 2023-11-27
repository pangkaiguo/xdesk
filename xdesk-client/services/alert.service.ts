import { filter, Subject } from 'rxjs';

export const alertService = {
  onAlert,
  success,
  error,
  info,
  warn,
  alert,
  clear
};

export const AlertType = {
  Success: 'Success',
  Error: 'Error',
  Info: 'Info',
  Warning: 'Warning'
};

const alertSubject = new Subject();
const defaultId = 'default-alert';

// enable subscribing to alerts observable
function onAlert(id = defaultId) {
  return alertSubject.asObservable().pipe(filter((x: any) => x && x.id === id));
}

// convenience methods
function success(message?: string, options?: object) {
  alert({ ...options, type: AlertType.Success, message });
}

function error(message?: string, options?: object) {
  alert({ ...options, type: AlertType.Error, message });
}

function info(message?: string, options?: object) {
  alert({ ...options, type: AlertType.Info, message });
}

function warn(message?: string, options?: object) {
  alert({ ...options, type: AlertType.Warning, message });
}

// core alert method
function alert(_alert: any) {
  _alert.id = _alert.id || defaultId;
  _alert.autoClose = (_alert.autoClose === undefined ? true : _alert.autoClose);
  alertSubject.next(_alert);
}

// clear alerts
function clear(id = defaultId) {
  alertSubject.next({ id });
}