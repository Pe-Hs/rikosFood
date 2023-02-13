export interface AuthResponse{
    ok: boolean;
    uid?: string;
    usuario?: string,
    token?: string;
    msg?: string;

}

export interface User{
    uid?: string;
    usuario?: string;
}

export interface NuevoUsuario{
    usuario?: string,
    email?: string,
    password?: string
}